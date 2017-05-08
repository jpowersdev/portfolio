# Portfolio V2 (Now with Blog!)



## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
```
node.js
```
### Installing
Clone the github repo

```
git clone https://github.com/jonpowers/portfolio
```

Switch to the nodejs branch

```
git checkout nodejs
```

Install the dependencies

```
npm install
```

## Running the Server

__Three steps:__

1. `npm start`
2. `npm run watch`
3. `npm run serve`

__Step one__ starts the local file-handling server, which has a (very, very basic right now) API that returns a JSON object when you request a file. This object contains metadata (title, subtitle, timestamp, tags), as well as the markdown. These MD files act as the blog posts themselves.

__Step two__ runs webpack with the -w flag, which watches the directory for changes and recompiles the JSX files whenever a change is made. This gets output to bundle.js in the public/css folder.

__Step three__ 'serves' the public folder, with index.html as the starting point.
After running step three, you can visit the page at the location it tells you (for me it's localhost:5000)

You need to have three console tabs open to launch this project, as each of the above steps will continue running until you manually exit.

## Built With
* [Semantic-UI-React](https://react.semantic-ui.com/introduction) - Semantic-UI framework as React Components
* [Bluebird.js](http://bluebirdjs.com/) - Promise library
* [Lodash](https://lodash.com/) - Array/String manipulation
* [FileHound](https://github.com/nspragg/filehound) - Access blog files
* [Express](https://expressjs.com/) - Web server
* [Moment.js](https://momentjs.com/) - Handle dates
* [Meta-Marked](https://github.com/j201/meta-marked) - Process markdown files

## License

This project is licensed under the GPLv3 License - see the [LICENSE.md](LICENSE.md) file for details
