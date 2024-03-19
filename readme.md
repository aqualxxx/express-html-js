# express-html-js

Simple js-engine for Express framework. Vanilla HTML and JS code only and no third party parsers.

## Why express-html-js?

Other engines for Express Node.js require from you knowledge third party tools and syntax. This package allows you to create html-pages using pure HTML and vanilla JavaScript ES6+. Why not!? ¯\\_(ツ)_/¯ 

## Install

Install with [npm](http://github.com/):

    > npm install express-html-js

## Test example

    > npm run test

Then follow the tips in the console window

## Using

First of all you need to tune your app to work with the new engine:
```js
//connect engine to your app instance
app.engine('js', require('express-html-js').engine);
//set up js engine by default
app.set('view engine', 'js');
//set up layouts directory
app.set('views', path.join(__dirname, 'views'));
```
Then you need to construct your own layout like this:
`layout.js`
```js
module.exports = (data) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>${data.title || ''}</title>
    </head>
    <body>
        ${data.content}
    </body>
</html>`;
```
`index.js`
```js
const layout = require('./layout');
module.exports = (data) => {
    data.content = `<h1>${data.title || ''}</h1>
    <h2>Your topic</h2>`;
    //...
    return layout(data);
};
```
As you see, we can use nested layouts. 
After all you can call render function for any layouts from `views` directory:
```js
app.get("/", (req, res, next) => {
    res.render('index', {
        title: 'My content',
        listData: []
    });
});
```

## API usage tips

### engine.list(array, options, callback)
Will render your list collection with style you choose:
```js
const engine = require('express-html-js');
const layout = require('./layout');
module.exports = (data) => {
    data.content = `<h1>${data.title || ''}</h1>
    <h2>My friends:</h2>
    ` + engine.list(data.listData, {type:'ul', className:'test'}, item => `<li>${item}</li>`);
    return layout(data);
};
```
### engine.table(array, options, callback)
Will render your table collection with style you choose:
```js
const engine = require('express-html-js');
const layout = require('./layout');
module.exports = (data) => {
    data.content = `<h1>${data.title || ''}</h1>
    <h2>My friends:</h2>
    ` + engine.table(data.tableData, {
        caption: 'Table caption',
        className: 'test',
        header: ['ID', 'Name']
    }, row => `<td>${row.id}</td><td>${row.name}</td>`);
    return layout(data);
};
```