var a=1;

let promise = new Promise(function(resolve,reject){
    if (typeof(a) === typeof("") ) 
        resolve(a + " is Not a number");
    else 
        reject(a + " is a number");
});

promise.then((resolve) =>{
    console.log(resolve);
}).catch((reject) =>{
    console.log(reject);
});