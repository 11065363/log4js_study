var request = require('request');
request({url:'http://zhuanlan.zhihu.com/api/columns/bigertech/posts/19885746',gzip:true}, function (err,response,body) {
    console.log(JSON.parse(body));
});