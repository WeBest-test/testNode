function* Hello(){
    // 我习惯用大驼峰命名因为这就好比generator的构造函数
    yield 1;
    yield 2;
}

var hello = Hello();// hello 是一个generator
var a = hello.next(); // a: Object {value: 1, done: false}
var b = hello.next(); // b: Object {value: 2, done: false}
var c = hello.next();

console.log(a);