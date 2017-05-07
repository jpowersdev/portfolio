# Portfolio V2 (Now with Blog!)


## Three Steps:

1. `npm start`
2. `npm run watch`
3. `npm run serve`

__Step one__ starts the local file-handling server, which has a (very, very basic right now) API that returns a JSON object when you request a file. This object contains metadata (title, subtitle, timestamp, tags), as well as the markdown. These MD files act as the blog posts themselves.

__Step two__ runs webpack with the -w flag, which watches the directory for changes and recompiles the JSX files whenever a change is made. This gets output to bundle.js in the public/css folder.

__Step three__ 'serves' the public folder, with index.html as the starting point.
After running step three, you can visit the page at the location it tells you (for me it's localhost:5000)

You need to have three console tabs open to launch this project, as each of the above steps will continue running until you manually exit.

**Questions? Email me at [dev@jpow.io](mailto:dev@jpow.io)**
