const firstPromise = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [{ id: 3, username: 'fathi' }, { id: 4, username: 'Amanee' }],
                '/about': 'hello this is the about page'
            }
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }
        }, 1500);
    });
}
firstPromise('/users').then((res)=>{
    console.log(`status: ${res.status} with data: ${res.data}`);
    console.log('REQUEST WORKED!');
}).catch((res)=>{
    console.error(`status: ${res.status}`, res);
    console.log('REQUEST FAILED!');
})

firstPromise('/abou').then((res)=>{
    console.log(`status: ${res.status} with data: ${res.data}`);
    console.log('REQUEST WORKED!');
}).catch((res)=>{
    console.error(`status: ${res.status}`, res);
    console.log('REQUEST FAILED!');
})
