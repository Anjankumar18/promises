function rolldice(){
    return Math.floor(Math.random() * 6) + 1;
}

function rollaSix(){
    return new Promise((resolve,reject) => {
        var n = rolldice();
        if (n === 6) 
            resolve(n);
        else 
            reject(n);
    });
}

rollaSix().then(resolve=(toss) => {
    console.log('Yay, rolled a ' + toss + '.');  
  }).catch( reject =(toss) => {
    console.log('Oh no, rolled a ' + toss + '.');  
  });