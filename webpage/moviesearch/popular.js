//TMDB
function popularDemo(){
const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';
const BASE_URL = 'https://api.themoviedb.org/3';
//use the below api url for the most popular movies
//https://api.themoviedb.org/3/tv?api_key=<<api_key>>&language=en-US
//const API_URL = BASE_URL + '/tv?'+API_KEY+'&language=en-US&page=1';
const API_URL = BASE_URL + '/trending/all/day?'+API_KEY+'&page=1';
//
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//use the below api url for the best movies from 2010
const API2_URL = BASE_URL + '/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&'+API_KEY;
//use the below api url for the movies are in theatres
const API3_URL = BASE_URL + '/movie/76341?'+API_KEY+'&language=hi';
//https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=de
//use the below api url for the highest rated movies
//https://api.themoviedb.org/3/movie/76341?api_key=9a85a018f878f3af62f324c75c332248&language=te

const API4_URL = BASE_URL + 'the highest rated movies rated R&'+API_KEY;

//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=de-DE&region=DE&release_date.gte=2016-11-16&release_date.lte=2016-12-02&with_release_type=2|3




const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;



const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');


//-----------------------------------------------get movies---------------------------------------------------
getMovies(API_URL);

function getMovies(url) {
  //lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !=0){
        showMovies(data.results);}
        else{
        main.innerHTML=`<h1 class= "noResult">No Result Found</h1>`
        }
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

}



