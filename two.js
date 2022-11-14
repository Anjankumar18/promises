const p1=new Promise((resolve,reject) => {
    setTimeout(function() {resolve("hi");},1100);
    setTimeout(function() {reject("hello");},1000)
    })    


const p2=new Promise((resolve,reject) => {
        resolve("hiii");  
        reject("hellooo"); 
    })    

p1.then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
});

p2.catch((reject) => {
    console.log(reject);
}).then((resolve) => {
    console.log(resolve);
});