
function t_or_f(){
     a=10;
     b=10;
     if(a==b){
        return true;
      } else 
        return false;
}


const promise=new Promise((restrue,rejfalse) => {
    if (val == true) {
        restrue("true");
    } else if (val == false){
        rejfalse("false");
    } else 
        rejfalse("value not reached");
});

var val = t_or_f();

promise.then((restrue) => {
    console.log(restrue);
}).catch((rejfalse) => {
    console.log(rejfalse);
});

