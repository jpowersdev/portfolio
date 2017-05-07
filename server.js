const fs = require('fs')
const path = require('path');
const express = require('express')
const app = express()
const marked = require('meta-marked')

app.get('/archive/:filename', function (req, res) {
  filename = path.resolve(__dirname, 'public/archive/', req.params.filename);

  fs.readFile(filename, 'utf8', function (err,data) {
    res.set('Access-Control-Allow-Origin', '*')
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

app.listen(5001, function () {
})
