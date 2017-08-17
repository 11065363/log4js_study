var express=require('express');
var app=express();
var cheerio=require('cheerio');
var request = require('request');
var Iconv=require('iconv-lite');//request请求gb2312乱码问题,单独不支持windows平台
var BufferHelper= require('bufferhelper');
//var str = iconv.decode(buf, 'GBK'); //return unicode string from GBK encoded bytes
//var buf = iconv.encode(str, 'GBK');//return GBK encoded bytes from unicode string

app.get('/',function (req,res) {
    request('http://news.163.com/', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                response.Charset = "gb2312";
                $ = cheerio.load(body);

                console.log(body);
                res.send(body);
            }
        })
    console.log("请求");
    //res.send("ss");
});

app.listen(3000,function (req,res) {
    console.log('3000');
});


