var log4js= require('log4js');
exports.log4js_config=function () {
    log4js.configure({
        appenders: { cheese: { type: 'file', filename: 'cheese.log' } ,
            mytest:{type:'console'},
            date_file:{type:'dateFile',filename:'date_file',maxSize:10,
                pattern:'yyyy-MM-dd-hh.log'}
        },
        categories: { default: { appenders: ['cheese'], level: 'debug' } ,
            mytest:{appenders:['mytest'],level :'error'},
            date_file:{appenders:['date_file'],level:'error'}
        }
    });
}
//ÐÞ¸Ä²âÊÔ