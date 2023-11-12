document.getElementById('getdata').addEventListener('click',getData);
const container = document.getElementById('container');
const list = document.getElementById('list');
function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        data.forEach(item=> {
            const li=document.createElement("li");
            li.textContent=`Title: ${item.title}, Completed: ${item.completed}`
            list.append(li);
        })
    })
}
