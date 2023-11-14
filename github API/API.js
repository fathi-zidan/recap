const userName = document.getElementById('userName');
const searchButton = document.getElementById('searchBTN');
const footerSection = document.getElementById('footer');
const form = document.getElementById('form1');
const url = 'https://api.github.com/users'

const fetchedUserNames = async () => {
    try {
        const response = await fetch(url + `/${userName.value}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log([result]);
        displayUsers([result]);

    } catch (error) {
        console.log("Error:", error);
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    fetchedUserNames();
});

function displayUsers(users) {
    users.forEach(element => {
        const card = document.createElement('section');
        card.classList.add('card');

        const cardImg = document.createElement('img');
        cardImg.src = element.avatar_url;
        cardImg.alt = "profile picture";
        card.appendChild(cardImg);

        const a1 = document.createElement('a');
        a1.href = element.html_url;
        a1.target = "_blank";
        const name = document.createElement('h2');
        name.textContent = `${element.login}`;
        a1.appendChild(name);
        card.appendChild(a1);

        const a2 = document.createElement('a');
        a2.href = element.html_url;
        a2.target = "_blank";
        const publicRepos = document.createElement('h3');
        publicRepos.textContent = `Public Repositories: ${element.public_repos}`;
        a2.appendChild(publicRepos);
        card.appendChild(a2);


        footerSection.appendChild(card);
    });

}