const Promise = require("bluebird");
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const express = require('express')
const app = express()
const marked = require('meta-marked')
const _ = require('lodash')
const Moment = require('moment')

const PORT = process.env.PORT || 8080;

const FileHound = require('filehound');

function getFileNames(files) {
  if (files.constructor === Array){
    return Promise.map(files, (file) => {
      return file;
    }).then((list) => {
      // console.log(list);
      return list.sort((a, b) => {
        return new Moment(a.timestamp, "MMM DD YYYY").isBefore(Moment(b.timestamp, "MMM DD YYYY"));
      }).map((file) => {
          return file.filename;
      })
    })
  }
  else return [files.filename];
}

function getTags(files) {
  if (files.constructor === Array){
    return Promise.map(files, (file) => {
      return _.map(file.tags, (tag) => _.toLower(tag));
    }).then((tags) => {
      return _.uniq(_.flatten(tags)).sort();
    })
  }
  else return _.uniq(_.flatten(files.tags)).sort();
}

function getArchive(files) {
  if (files.constructor === Array){
    return Promise.map(files, (file) => {
      return file.timestamp;
    }).then((archive) => {
      return _.uniqWith(
        archive.sort((a, b) => {
          return new Moment(a, "MMM DD YYYY").isBefore(Moment(b, "MMM DD YYYY"));
        }), isSameMonth);
    })
  }
  else return [files.timestamp];
}

function inList(tag, list) {
  newlist = _.map(list, (t) => _.toLower(t));
  return _.includes(newlist, tag);
}

function getFilesByTag(files, tag) {
  return Promise.map(files, (file) => {
    return file;
  }).filter(file => inList(tag, file.tags) ? true : false)
}

function isSameMonth(time1, time2) {
  return Moment(time1, "MMM DD YYYY").isSame(Moment(time2, "MMM DD YYYY"), "month");
}

function getFilesByMonth(files, month) {
  return Promise.map(files, (file) => {
    return file;
  }).filter(file => (isSameMonth(file.timestamp, month)) ? true : false)
}

function parseFiles(files) {
  // console.log(files);
  return Promise.map(files, function(file) {
    return fs.readFileAsync(file, 'utf8');
  }).then((out) => {
    return Promise.map(out, function(file) {
      // console.log(marked(String(file)).meta);
      return marked(String(file)).meta;
    })

  })
}

app.get('/tags/:tag', function(req, res) {
  const filehound = FileHound.create()
    .paths(path.resolve(__dirname, 'src/archive/'))
    .ext('md')
    .find()
    .then(parseFiles)
    .then((files) => getFilesByTag(files, req.params.tag))
    .then((data) => {
      // console.log(data);
      return Promise.props({
        files: getFileNames(data),
        tags: [req.params.tag],
        archive: getArchive(data)
      });
    }).then(output => res.json(output));
});

app.get('/months/:month', function(req, res) {
  const filehound = FileHound.create()
    .paths(path.resolve(__dirname, 'src/archive/'))
    .ext('md')
    .find()
    .then(parseFiles)
    .then((files) => getFilesByMonth(files, req.params.month))
    .then((data) => {
      // console.log(data);
      return Promise.props({
        files: getFileNames(data),
        tags: getTags(data),
        archive: [req.params.month]
      });
    }).then(output => res.json(output));
});

app.get('/files', function(req, res) {
  const filehound = FileHound.create()
    .paths(path.resolve(__dirname, 'src/archive/'))
    .ext('md')
    .find()
    .then(parseFiles)
    .then((data) => {
      // console.log(data);
      return Promise.props({
        files: getFileNames(data),
        tags: getTags(data),
        archive: getArchive(data)
      });
    }).then(output => res.json(output));
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
