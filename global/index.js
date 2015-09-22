console.log('byvoid%diovyb', 1991);

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

//测试计时对象
//计时开始
console.time("获取数据");
//Do something
console.log('byvoid%diovyb', 1991);
//计时结束
console.timeEnd('获取数据');

console.info("程序执行完毕。");

//测试process对象
console.log(process.cwd());
console.log(process);


//测试预定义全局常量
console.log( __filename );
console.log( __dirname );