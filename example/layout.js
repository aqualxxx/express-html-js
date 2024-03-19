module.exports = (data) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${data.title}</title>
        <style>
            * {
                box-sizing: border-box;
            }
            html {
                height: 100%;
            }
            body {
                font-size: 16px;
                margin: 0;
                padding: 0;
                height: 100%;
            }
            header {
                background-color: lightgray;
                border-bottom: 1px solid darkgray;
            }
            header nav {
                display: block;
            }
            header nav a {
                color: white;
                text-decoration: none;
            }
            header nav a:hover {
                color: black;
            }
            header nav span {
                margin: 0;
                padding: 0.25rem;
                font-size: 1.5rem;
                text-transform: uppercase;
            }
            header nav ul {
                display: inline-block;
                margin: 0;
                padding: 0.25rem;
                list-style-type: square;
            }
            header nav ul li {
                display: inline-block;
                font-size: 1.5rem;
                padding-left: 0.5rem;
            }
            h1,h2,p {
                padding: 0 1rem;
                margin:0;
            }
            h1 {
                font-size: 2rem;
                color: darkblue;
                padding-top: 1rem;
                padding-bottom: 0.5rem;
            }
            h2 {
                font-size: 1.75rem;
                padding-top: 0.75rem;
                padding-bottom: 0.25rem;
            }
            ul.test {
                padding: 0.5rem initial;
            }
            ul.test li {
                padding: 0.125rem;
            }
            ul.test li:hover {
                background-color: cornsilk;
            }
            table.test {
                border: 1px solid darkgray;
                border-radius: 3px;
                margin: 0 auto;
                width: 90%;
            }
            table.test caption {
                text-align: left;
            }
            table.test thead {
                background-color: lightgray;
            }
            table.test tr:nth-child(2),
            table.test tbody tr:hover {
                background-color: cornsilk;   
            }
            table.test tfoot {
                background-color: lightgray;
            }
            table.test th,
            table.test td {
                padding: 0.125rem;
                text-align: center;
            }
            footer {
                background-color: lightgray;
                border-top: 1px solid darkgray;
                margin-top: 1rem;
                padding: 0.5rem;
                text-align: center;
                width: 100%;
                position: fixed;
                bottom: 0;
            }
        </style>
    </head>
    <body>
        <header>
            <nav>
                <span>express-html-js</span>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </nav>
        </header>
        ${data.content}
        <footer>
            <span>&copy; All rights reserved!</span>
        </footer>
    </body>
</html>`;