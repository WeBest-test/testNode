/**
 * http://www.runoob.com/nodejs/nodejs-fs.html
 * @type {exports}
 */

var fs = require("fs");

// 异步读取
console.time("async");
fs.readFile('text.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: \n" + data.toString());
    console.timeEnd('async');
});




// 同步读取
console.time("sync");
var data = fs.readFileSync('text.txt');
console.log("同步读取: \n" + data.toString());

console.log("程序执行完毕。");
console.timeEnd('sync');