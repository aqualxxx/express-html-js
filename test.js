const http = require('node:http');
const engine = require('./index.js').engine;
const port = 3000;
const app = http.createServer((req, res) => {
    const layoutData = {
        title: 'Hello express-html-js!',
        listData: ['One', 'Two', 'Three'],
        tableData: [
            {id:1, color: 'red',    example:'rgb(255,0,0)'},
            {id:2, color: 'green',  example:'rgb(0,255,0)'},
            {id:3, color: 'blue',   example:'rgb(0,0,255)'},
        ]
    };
    engine('./example/index.js', layoutData, (err, html) => {
        if(err) {
            console.log(err);
            res.end('Oops!');
        }
        res.writeHeader(200, {'Content-Type':'text/html'});
        res.write(html);
        res.end();
    });
});
app.listen(port, () => {
    console.log(`Check out our example on page http://localhost:${port}/`);
})