
//TMDB

const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';
const BASE_URL = 'https://api.themoviedb.org/3';
//use the below api url for the most popular movies
const API_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=te';
//use the below api url for the best movies from 2010
const API2_URL = BASE_URL + '/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&'+API_KEY;
//use the below api url for the movies are in theatres
const API3_URL = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+API_KEY;

//use the below api url for the highest rated movies

const API4_URL = BASE_URL + 'the highest rated movies rated R&'+API_KEY;
//https://api.themoviedb.org/3/movie/550?api_key={api_key}&language=en-US&append_to_response=images&include_image_language=en,null
//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=de-DE&region=DE&release_date.gte=2016-11-16&release_date.lte=2016-12-02&with_release_type=2|3




const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;



const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
//const tagsEl = document.getElementById('#');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;





getMovies(API_URL);

function getMovies(url) {
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !=0){
        showMovies(data.results);

        //pagination
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if(currentPage <= 1){
              prev.classList.add('disabled');
              next.classList.remove('disabled')
            }else if(currentPage>= totalPages){
              prev.classList.remove('disabled');
              next.classList.add('disabled')

            }else{
              prev.classList.remove('disabled');
              next.classList.remove('disabled')
            }


        }
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
                <span id="sample" class="${getColor(vote_average)}">${vote_average}</span>
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

//--------------------------------------genre list-------------------------------------------------------
function gen(){
const genres =
   [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

console.log(genres)
//document.getElementById(genre);
}
//---------------------------------------------------||-----------------------------
//for click it will load page
//window.onload = function() {
  //     getMovies()
   //   };
//------------------------------------pagination-------------------------------------------


prev.addEventListener('click', () => {
  if(prevPage > 0){
    pageCall(prevPage);
    form.scrollIntoView({behavior : 'smooth'})
  }
})

next.addEventListener('click', () => {
  if(nextPage <= totalPages){
    pageCall(nextPage);
    form.scrollIntoView({behavior : 'smooth'})
  }
})

function pageCall(page){
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getMovies(url);
    console.log("hello")
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
  }
}







