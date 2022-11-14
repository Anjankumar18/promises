async function add() {
    let p=new Promise((resolve) => {
        resolve(2+2);
    });
    console.log(await p);
}
add();