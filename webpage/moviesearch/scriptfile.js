//TMDB

const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';
const BASE_URL = 'https://api.themoviedb.org/3';
//use the below api url for the most popular movies
//const API_URL = BASE_URL + '/discover/movie?&region=IN&sort_by=popularity.desc&'+API_KEY+'&language=en';
//this is for telugu language
const API_URL = BASE_URL + '/discover/movie?&region=IN&'+API_KEY+'&with_original_language=te&sort_by=vote_average.desc&primary_release_year=2021';
//This is for release Dates
//const API_URL = BASE_URL + '/discover/movie?&region=IN&'+API_KEY+'&with_original_language=te&sort_by=vote_average.desc&primary_release_year=2021&primary_release_date.gte=2021-07-15&primary_release_date.lte=2021-08-15';

//const API_URL = BASE_URL + '/discover/movie?&region=IN&'+API_KEY+'&with_original_language=te';


//use the below api url for the best movies from 2010
const API2_URL = BASE_URL + '/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&'+API_KEY;
//use the below api url for the movies are in theatres
const API3_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+API_KEY;

//use the below api url for the highest rated movies

const API4_URL = BASE_URL + 'the highest rated movies rated R&'+API_KEY;

//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=de-DE&region=DE&release_date.gte=2016-11-16&release_date.lte=2016-12-02&with_release_type=2|3




const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;



const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');







getMovies(API_URL);

function getMovies(url) {
  //lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);

    })

}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            

        `

        main.appendChild(movieEl);


    })
}





function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})





