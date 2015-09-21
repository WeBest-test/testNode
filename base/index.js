/**
 * http://www.runoob.com/nodejs/nodejs-module-system.html
 * @type {Hello|exports}
 */
//main.js
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
h = new Hello;
h.setName('hh');
h.sayHello();
hello.sayHello();
