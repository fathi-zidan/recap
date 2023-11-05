let movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: "Drama",
        director: "Frank Darabont",
        releaseYear: 1994,
        rating: 9.3,
        votes: 2345890,
    },
    {
        id: 2,
        title: "The Godfather",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        rating: 9.2,
        votes: 1620360,
    },
    {
        id: 3,
        title: "The Godfather: Part II",
        genre: "Crime, Drama",
        director: "Francis Ford Coppola",
        releaseYear: 1974,
        rating: 9.0,
        votes: 1133175,
    },
    {
        id: 4,
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        director: "Christopher Nolan",
        releaseYear: 2008,
        rating: 9.0,
        votes: 2303232,
    },
    {
        id: 5,
        title: "12 Angry Men",
        genre: "Crime, Drama",
        director: "Sidney Lumet",
        releaseYear: 1957,
        rating: 9.0,
        votes: 689845,
    },
];
function getMovieInitials(title) {
    const movie = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());
    if (movie) {
        const titleWords = movie.title.split(' ');
        let initials = '';
        for (let i = 0; i < titleWords.length; i++) {
            initials += titleWords[i].charAt(0).toUpperCase();
        }
        console.log("Initials: " + initials);
        return initials;
    } else {
        console.log("No such Movie");
    }
}

function splitGenres(genres) {
    const movie = movies.find((movie) => movie.genre.toLowerCase() === genres.toLowerCase());
    if (movie) {
        const genreList = movie.genre.split(',');
        const arr = [];
        for (let i = 0; i < genreList.length; i++) {
            arr[i] = genreList[i];
        }
        console.log(arr);

    } else {
        console.log("No such Genre");
    }

}

const getTotalMovieLength = (movies) => {
    let totalLength = 0;
    for (let i = 0; i < movies.length; i++) {
        totalLength += movies[i].length;
    }
    return 'Total movie length is ' + totalLength + ' minutes';
};

function movieTitles(movies) {
    const titles = movies.map((movie) => {
        return movie.title;
    });

    console.log(titles);
    return titles;
}
// const movieTitles1 = movies.map(movie => movie.title)
// console.log(movieTitles1);

function highlyRatedMovies(minRating) {
    const highRatings = movies.filter((movie) => movie.rating >= minRating);
    const highRatingsTitles = highRatings.map((movie) => movie.title);
    console.log(highRatingsTitles);
    return highRatingsTitles;
}

function averageMovieRating() {
    let sumOfAllRatings = 0;
    movies.forEach((movie) => {
        sumOfAllRatings += movie.rating;
    });
    const avgRating = sumOfAllRatings / movies.length;
    console.log('The average rating of all the movies is:', avgRating);
    return avgRating;
}

function sortVotes() {
    const sortedMovies = movies.sort((a, b) => b.votes - a.votes);
    const sortedMovieTitles = sortedMovies.map((movie) => movie.title);
    console.log("the sorted list is :", sortedMovieTitles);
    return sortedMovieTitles;
}
// objects ////////////////////////////////////////////////////////////////////////////////////////////////

const moviesDatabase = {
    Movies: [],
    addMovie: function (Title) {
        const newMovie = {
            title: Title,
            rating: [],
            averageRating: 0
        }
        this.Movies.push(newMovie);
    },
    removeMovie: function (Title) {
        const foundMovie = this.Movies.findIndex((ele) => ele.title.toLowerCase() === Title.toLowerCase());
        if (foundMovie !== -1) {
            this.Movies.splice(foundMovie, 1);
            console.log(`Removed the movie: ${Title}`);
        } else {
            console.log("No such Movie Found");
        }
    },
    searchMovie: function(string){
        const searchedMovie = this.Movies.filter((ele)=>ele.title.toLowerCase().includes(string.toLowerCase()));
        console.log("Search results:",searchedMovie);
        return searchedMovie;
    }
}

// getMovieInitials("The Godfather");
// getMovieInitials("The Dark Knight");
// splitGenres("Drama");
// splitGenres("Crime, Drama");
// movieTitles(movies);
// highlyRatedMovies(9.1);
// averageMovieRating();
// sortVotes();

moviesDatabase.addMovie("The Shawshank Redemption");
moviesDatabase.addMovie("The Godfather");
moviesDatabase.addMovie("The Dark Knight");
moviesDatabase.removeMovie("The Shawshank Redemption");
console.log(moviesDatabase);
moviesDatabase.searchMovie("dark");