function prom(resOrRej) {
    return new Promise((res,rej) => {
        if (resOrRej == "res") {
            setTimeout(function() {res("resolved");},4000);
        } else
            rej("rejected");
    })
}

let promise = new Promise((resolve,reject) => {
    prom("res").then((result) => {
        resolve(result);
    }).catch((error) => {
        reject(error);
    })
});

promise.then((result) => {
    console.log(result); 
}).catch((error) => {
    console.log(error);
})