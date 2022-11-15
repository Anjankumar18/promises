let prom1=new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("resolved");
    }, 1000);
    // reject("rejected");
})

let prom2=new Promise((resolve,reject) => {
    resolve("resolved2");
    reject("rejected2");
});

//it waits until any of promises is fulffiled or rejected
Promise.race([prom1,prom2]).then((resolve) => {
    console.log(resolve);
}).catch((reject) =>{
    console.log(reject);
});