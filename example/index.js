const html = require('./../index.js');
const layout = require('./layout');
module.exports = (data) => {
    data.content = `<h1>${data.title}</h1>
    <h2>About this page</h2>
    <p>This page will show you how to easily integrate html layouts with Express Node.js by using 'express-html-js' module. In addition to the engine, the module provide simple ways to render ciclyc data (lists and tables) on a page. All you need to do is simply pass your collection, list options and callback function (that will visualize each collection item) into render function.</p>
    <h2>List example</h2>
    ` + html.list(data.listData, {className: 'test'}, item => `<li>${item}</li>`) + `
    <h2>Table example</h2>
    ` + html.table(data.tableData, {
        caption: 'Table caption',
        className: 'test',
        header: ['ID', 'Color', 'Example']
    }, row => `<td>${row.id}</td><td>${row.color}</td><td>${row.example}</td>`);
    return layout(data);
};