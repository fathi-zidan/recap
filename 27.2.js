const makeAllCaps= (word) => {
    return new Promise((resolve, reject) => {
        const capitalizedWords = word.map((ele) => {
            if (typeof ele === 'string') {
                return ele.toUpperCase();
            } else {
                reject('All words must me strings');
            }
        });
        resolve(capitalizedWords);
    });
}
const sortWords = (word)=>{
    return new Promise ((resolve,reject)=>{
        const sortedWords = word.sort();
        resolve(sortedWords);
    })
}
const arr = ['fathi','hello','abed','ben'];
const arr2 = ['fathi',1,'abed','ben'];

makeAllCaps(arr).then(res=>{
    console.log(res);
}).catch(res=>{
    console.log('Error:',+res);
})

sortWords(arr).then(res=>{
    console.log(res);
}).catch(res=>{
    console.log('Error:',+res);
})

makeAllCaps(arr)
.then(res=>sortWords(res))
.then((sortedRes)=>console.log('sorted :',sortedRes))
.catch((error) => console.error('Error:', error));

makeAllCaps(arr2)
.then(res=>sortWords(res))
.then((sortedRes)=>console.log('sorted :',sortedRes))
.catch((error) => console.error('Error:', error));