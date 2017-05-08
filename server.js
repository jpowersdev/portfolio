const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const express = require('express')
const app = express()
const marked = require('meta-marked')
const _ = require('lodash')

const PORT = process.env.PORT || 8080;

const FileHound = require('filehound');

function getFileNames(files) {
  return Promise.map(files, (file) => {
    return file.filename;
  })
}

function getTags(files) {
  return Promise.map(files, (file) => {
    return _.map(file.tags, (tag) => _.toLower(tag));
  }).then((tags) => {
    return _.uniq(_.flatten(tags)).sort();
  })
}

function getArchive(files) {
  return Promise.map(files, (file) => {
    return file.timestamp;
  })
}

function loadFiles(files) {
  console.log(files);
  return Promise.map(files, function(file) {
    return fs.readFileAsync(file, 'utf8');
  }).then((out) => {
    console.log(out);
    return Promise.map(out, function(file) {
      return marked(String(file)).meta
    })

  })
}

  // files.forEach((file) => {
  //   fs.readFileAsync(file, 'utf8', function (err,output) {
  //     if (err) {
  //       console.log(err);
  //     }
  //     else {
  //       d = marked(output);
  //       data.files.push(file);
  //       for (tag of d.meta.tags) {
  //           data.tags.push(tag);
  //       }
  //       data.archive.push(d.meta.timestamp);
  //     }
  //   })
  // });

app.get('/files', function(req, res) {
  const filehound = FileHound.create()
    .paths(path.resolve(__dirname, 'src/archive/'))
    .ext('md')
    .find()
    .then(loadFiles)
    .then((data) => {
      return Promise.props({
        files: getFileNames(data),
        tags: getTags(data),
        archive: getArchive(data)
      });
    })
    .then((data) => res.json(data));
});

app.get('/archive/:filename', function (req, res) {
  filename = path.resolve(__dirname, 'src/archive/', req.params.filename);

  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      res.status(400).send(err);
    }
    else {
      data = marked(data);
      res.send({
        title: data.meta.title,
        subtitle: data.meta.subtitle,
        tags: data.meta.tags,
        timestamp: data.meta.timestamp,
        markdown: data.markdown
      });
    }
  });
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.listen(PORT, function () {
  console.log("Server listening on port ", PORT);
})
