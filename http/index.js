/**
 * http://www.runoob.com/nodejs/nodejs-router.html
 * @type {exports}
 */

var server = require("./server");
var router = require("./router");

server.start(router.route);