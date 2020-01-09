/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*eslint-env node*/

var express = require('express');
var app = express();


//test
const https = require('https');

app.get('/', function (req, res) {
  var mytag='';
  https.get('https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw&json=1&delay=0&_=1577942519971', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        mytag='<html><body><table border=1><tr><td>公司</td><td>'+JSON.parse(data).msgArray['0'].n
        + '</td></tr><tr><td>開盤</td><td>' + JSON.parse(data).msgArray['0'].o
        + '</td></tr><tr><td>最高價</td><td>' + JSON.parse(data).msgArray['0'].h
        + '</td></tr><tr><td>成交價</td><td>'+ JSON.parse(data).msgArray['0'].z
        + '</td></tr></table></body></html>';
        res.send(mytag);
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//test

/*
var request = require('request');

request('https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw&json=1&delay=0&_=1578290584600', { json: true }, function(err, res, body) {
  app
    .get('/', function (req, res) {
      res.send(body.msgArray.ts);
    })
    .listen(3000);
});*/


//var fs = require('fs');

//var url = 'https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw&json=1&delay=0&_=1578290584600';
/*
app.use('/public', express.static(__dirname + '/public'));

app.locals.title="Get json data using express web framework";

app.all('*', function(req, res, next){
  fs.readFile('posts.json', function(err, data){
    res.locals.posts = JSON.parse(data);
    next();
  });
});

app.get('/', function(req, res){
  //指定 /views/idex.ejs
  res.render('index.ejs');
});

app.get('/api/posts', function(req, res){
  res.json(res.locals.posts);
});

app.get('/post/:id', function(req, res, next){
  //取得 post.json 資料夾
  res.locals.posts.forEach(function(post){
    //從 url 取得 id 參數與 posts.json 裡的 id
    if (req.params.id === post.id){
      //顯示參數為  url 中 id 的 post.id, 那麼顯示部分資料
      res.render('post.ejs', { post: post });
    }
  })
});*/
/*
app.get(url, function(response){
    var data = '';

    response.on('data', function(chunk){
        data += chunk;
    });

    response.on('end', function(){
        data = JSON.parse(data);

        console.log(data);

        fs.writeFile( 'save.json', JSON.stringify(data),'utf8');
    });
    response.send('<table style="border:3px #cccccc solip;"border="1"><tr><td>台積電</td><td>???</td></tr></table>');
}).on('error', function(e){
    console.log("error: ",e)
});*/


/*app.get('/', function (req, res) {
  res.send('<table style="border:3px #cccccc solip;"border="1"><tr><td>Name</td><td>Nokto</td></tr><tr><td>Number</td><td>123</td></tr><tr><td>School</td><td>KNU</td></tr></table>');
});
*/
/*app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/
