document.getElementById('getdata').addEventListener('click', getData);
const container = document.getElementById('container');
const list = document.getElementById('list');
async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.jason();

        console.log(data)
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `Title: ${item.title}, Completed: ${item.completed}`
            list.append(li);
        });
    }catch(error){
        console.log(`Error: ${error}`);
    }
}

