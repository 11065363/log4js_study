const log4js = require('log4js');
var log4jsconfig=require('./log4jsconfig.js');
log4jsconfig.log4js_config();

const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

var logger2=log4js.getLogger('mytest');
logger2.warn('aaaaaaa.');
logger2.error('bbbbbbb');
logger2.fatal('ccccc');

var logger3=log4js.getLogger('date_file');
logger3.warn('dddd.');
logger3.error('eee');
logger3.fatal('fff');