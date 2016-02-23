var aaa = () => console.log(999);

var bbb = function(){
    console.log(666)
};

aaa();
bbb();


var plus = (a,b) => a+b;
var times = (a,b) => { return a*b; }
console.log( plus(3,8) );
console.log( times(3,8) );