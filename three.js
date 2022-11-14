var num=11;

function check(num){
    if (num < 10) {
        console.log("less");
    }else if(num > 10)
    console.log("more");
}

const promise=new Promise((lessThan,equalMorethan) => {
    if (num < 10) {
        lessThan("less than")
    } else if (num > 10) {
        equalMorethan("more than");
    } else
        equalMorethan("Equal to");
});

promise.then((lessThan) => {
    console.log(lessThan);
}).catch((equalMorethan) => {
    console.log(equalMorethan);
});

check(num);