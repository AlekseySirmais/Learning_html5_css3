    'use strict';

    const  http = require('http');
    const  fs = require('fs');

    const server = http.createServer(function (request,response) { // создаем сервер, который будет отдавать то, что нужно =)
        console.log(request.method,request.url);
        if (request.url=='/FirstCSS.css'){
            const  css = fs.readFileSync('FirstCSS.css','utf8');
            response.end(css);
        }
        if (request.url=='/TestJS.html'){
            const  testJS = fs.readFileSync('TestJS.html','utf8');
            response.end(testJS); return;
        }
        if (request.url=='/FirstPage.html') {
            const html = fs.readFileSync('FirstPage.html','utf8');
            response.end(html);
        } else response.end();

// css и html он возвращает, но необходимо возвращать еще и картинку и гифку!!!
    });

    console.log('port= ',process.env.PORT);

    server.listen(process.env.PORT);
    console.log('Server Started');
