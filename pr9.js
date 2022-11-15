
let prom = new Promise((resolve) => {
    function res(){
        resolve(hi());
    }
    res();
})

function hi() {
    return "hi";
}

prom.then((resolve) => {
    console.log(resolve);
});
