
function hello(){
    return "hello";
}

const p = new Promise((res,rej) => {   
    res("!");
    rej("hi");  
});

p.then((res) => {
    console.log(hello()+res);
}).catch((rej) => {
    console.log(rej);
})

