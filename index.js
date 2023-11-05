
const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        director: "Frank Darabont",
        releaseYear: 1994,
        rating: 9.3,
        votes: 2345890,
        img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        rating: 9.2,
        votes: 1620360,
        img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"

    },
    {
        id: 3,
        title: "The Godfather: Part II",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1974,
        rating: 9.0,
        votes: 1133175,
        img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 4,
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
        releaseYear: 2008,
        rating: 9.0,
        votes: 2303232,
        img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Crime, Drama",
        director: "Sidney Lumet",
        releaseYear: 1957,
        rating: 9.0,
        votes: 689845,
        img: "https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg"
    },
];
const movieContainer = document.querySelector('.container');
const movieForm = document.getElementById('movieForm');
const addMovieButton = document.getElementById('btn');

function displayMovie() {
    movieContainer.innerHTML = '';
    movies.forEach((ele) => {
        const cardSection = document.createElement('section');
        cardSection.classList.add('card');

        const img = document.createElement('img');
        img.src = ele.img;
        img.classList.add('card-image');
        cardSection.append(img);

        const title = document.createElement('h3');
        title.textContent = `Title: ${ele.title}`;
        cardSection.append(title);

        const Genre = document.createElement('p');
        Genre.textContent = `Genre: ${ele.genre}`;
        cardSection.append(Genre);

        const director = document.createElement('p');
        director.textContent = `Director: ${ele.director}`;
        cardSection.append(director);

        const releaseYear = document.createElement('p');
        releaseYear.textContent = `Release Year: ${ele.releaseYear}`;
        cardSection.append(releaseYear);

        const rating = document.createElement('p');
        rating.textContent = `Rating: ${ele.rating}`;
        cardSection.append(rating);

        const votes = document.createElement('p');
        votes.textContent = `Votes: ${ele.votes}`;
        cardSection.append(votes);

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove');

        removeButton.addEventListener('click', () => {
            removeMovie(ele.id);
        });
        cardSection.appendChild(removeButton);

        movieContainer.append(cardSection);
    });
}

function addMovie() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const director = document.getElementById('director').value;
    const releaseYear = parseInt(document.getElementById('releaseYear').value);
    const rating = parseFloat(document.getElementById('rating').value);
    const votes = parseInt(document.getElementById('votes').value);
    const img = document.getElementById('img').value;

    const newMovie = {
        title,
        genre,
        director,
        releaseYear,
        rating,
        votes,
        img
    }
    movies.push(newMovie);
    movieForm.reset();
    // displayMovie();
}

function removeMovie(ID) {
    const movie = movies.findIndex((ele) => ele.id === ID);
    if (movie !== -1) {
        movies.splice(movie, 1);
        displayMovie();
    } else {
        console.log("No such Movie Found");
    }

}
addMovieButton.addEventListener('click', (e) => {
    e.preventDefault();
    addMovie();
    displayMovie();
});

displayMovie();
console.log(movies);
