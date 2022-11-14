
// function hello(){
//     return "hello";
// }

const p = new Promise((res,rej) => {   
    res(function hello(){
        return "hello";
    });
    rej("hi");  
});

p.then((res) => {
    console.log(res);
}).catch((rej) => {
    console.log(rej);
})

