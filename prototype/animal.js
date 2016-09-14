var Creature = require('./creature');
var Animal = function(){};

Animal.prototype = new Creature();

Animal.prototype.syntax = 'Animal';

module.exports = function(){
    return new Animal();
};