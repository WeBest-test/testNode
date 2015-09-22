/**
 * http://www.runoob.com/nodejs/nodejs-util.html
 * @type {exports}
 */
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

// true
console.log(util.isDate(new Date()));
//false
console.log(util.isDate(Date()));