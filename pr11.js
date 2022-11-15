let prom=new Promise((resolve) => {
    resolve("Hello");
});

prom.then(resolve => {
    console.log(resolve+"!");
    return new Promise((resolve,reject) => {
        resolve("This is a Promise");
    }).then(resolve =>{
        console.log(resolve) 
        setTimeout(() => {
            console.log("inside a promise.");
        }, 1500);
    });
});