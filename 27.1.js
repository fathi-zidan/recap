const greaterThan = (num) =>{
    return new Promise((resolve,reject)=>{
        if(num > 10){
            resolve("Number is greater than 10");
        }else {
            reject("Number is not greater than 10")
        }
    });
}
greaterThan(11).then(res =>{
    console.log(res);
}).catch(res =>{
    console.log(res);
})