let input=true;

console.log("Awaits until promise is fullfilled");

let myprom= new Promise((resolve,reject) => {
    setTimeout(function () {
        if(input)
        return resolve("Promise resolved");
        else
        return reject("Promise Rejected");
        }, 3000); 
        });

async function newfunc () {
    let res = await myprom;
    console.log(res);
};
newfunc();