var oper = "a";
var n1 = 20;
var n2 = 10;

let prom=new Promise((res,rej) => {
    if (oper == 'a') {
        res("addition is ")
    } else if(oper == 's') {
        rej("subtraction is ");
    } else
        rej("enter 'a' for addition or 's' for subtraction");
});


prom.then((res) => {
    console.log(res + ( n1 + n2 ));
}).catch((rej) => {
    if (oper == 's') 
        console.log(rej + ( n1 - n2 ));
    else 
        console.log(rej);  
});