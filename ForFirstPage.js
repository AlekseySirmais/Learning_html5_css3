    'use strict';

    const  http = require('http');
    const  fs = require('fs');

    const server = http.createServer(function (request,response) { // создаем сервер, который будет отдавать то, что нужно =)
        console.log(request.method,request.url);

        if (request.url=='/'){
            const html = fs.readFileSync('FirstPage.html','utf8');
            response.end(html);
        }
        
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
        }

        if (request.url=='/Application.html') {
            const apphtml = fs.readFileSync('Application.html','utf8');
            response.end(apphtml);
        }
        if (request.url=='/CSSforApplication.css') {
            const appcss = fs.readFileSync('CSSforApplication.css','utf8');
            response.end(appcss);
        }
        if (request.url=='/gameMenu.js') {
            const appjs = fs.readFileSync('gameMenu.js','utf8');
            response.end(appjs);

        }else response.end(); //это ПОСЛЕДНЕЕ УСЛОВИЕ!








// css, html и js он возвращает, но необходимо возвращать еще и картинку и гифку!!! как это сделать? кодировка картинки?
    });

    console.log('port= ',process.env.PORT);

    server.listen(process.env.PORT);// перед комитом поенять на process.env.PORT
    console.log('Server Started');