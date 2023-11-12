document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);

function getText(){
    fetch('sample.txt')
    .then(function (res){
        return res.text(); 
    })
    .then(data=>{
        console.log(data)
        document.getElementById('output').textContent = data;
    })
    .catch(error=>{
        console.log("Error: ", error);
    });
}
function getUsers() {
    fetch("users.jason")
    .then((res)=> res.json())
    .then((data)=>{
        let output='<h2>Users</h2>';
        data.forEach(user => {
            output +=`
            <ul>
            <li> ID: ${user.id}</li>
            <li> Name: ${user.name}</li>
            <li> Email: ${user.email}</li>
            </ul>
            `; 
        });
        document.getElementById('output').innerHTML=output;
        
    })
    .catch(err=>console.log(err));
}
