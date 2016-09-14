function handler1(a){
    console.log(a);
}

function handler2(a){
    console.log(a);
    console.log('22222');
}

function exec(data,callback){
    callback(data);
}

exec({a:666},handler1);