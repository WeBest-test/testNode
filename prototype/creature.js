var Creature = function(){};
Creature.prototype = {
    name:"Creature",
    showName:function(){
        console.log(this.name);
    },
    syntax:'all'
};

module.exports = Creature;