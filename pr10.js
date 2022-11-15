let prom1=new Promise((resolve) => {
    resolve("resolved");
})

let prom2=new Promise((resolve,reject) => {
    reject("rejected");
    resolve("resolved");
});

//waits for all promises to be fulfilled , or any one to be rejected
Promise.all([prom1,prom2]).then((resolve) => {
    console.log(resolve);
}).catch((reject) =>{
    console.log(reject);
});


//Returns a Promise that fulfills after all of the given promises is either fulfilled or rejected,
// with an array of objects that each describe the outcome of each promise.
Promise.allSettled([prom1,prom2]).then((resolve) => {
    console.log(resolve);
}).catch((reject) =>{
    console.log(reject);
});

