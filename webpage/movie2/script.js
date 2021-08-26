//=====================================menu bar===================================================
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}



//================================================================================================



//-------------------------------------------------------------------------------------------------------------

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';

//const API_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=te';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;



const main = document.getElementById('main');
const form =  document.getElementById('form');
const form1 =  document.getElementById('form1');
const search = document.getElementById('search279');
//window.alert(search.value);

//const tagsEl = document.getElementById('#');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;
//------------------------------------------------------------------------------------------------------
const TAMIL_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=ta';
const HINDI_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=hi';
const KANNADA_URL = BASE_URL + '/discover/movie?primary_release_year=2019&region=IN&'+API_KEY+'&with_original_language=kn';
const TELUGU_URL = BASE_URL + '/discover/movie?primary_release_year=2021&'+API_KEY+'&with_original_language=te&page=1';
const MALAYALAM_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=ml';
const ENGLISH_URL = BASE_URL + '/discover/movie?'+API_KEY+'&with_original_language=en&page=4';
const TRENDING_URL = BASE_URL + '/trending/all/day?'+API_KEY+'&page=1';
const API_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=te';
getMovies(API_URL);
//const tamil = document.getElementById('tamil');
//getMovies(API_URL);



//-----------------------------------------------------------------
var el_up = document.getElementById("");
		var el_down = document.getElementById("");
		//el_up.innerHTML = "Click on the button to get "
							//+ "all IDs in an array.";

		function gfg_Run() {
			var ID = [];
			$("*").each(function() {
				if (this.id) {
					ID.push(this.id);
				}
			});
			//el_down.innerHTML = ID;
            return ID;
		}
        var z=gfg_Run();
        //alert(z);
        //alert(z.length);
        //alert(Object.values(z)[0]);


        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="tamil"){
                                                    var xy=TAMIL_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(xy);
                                                    //alert("Hello World!"+xy);
                                                    });
                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                        }
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="hindi"){
                                                    var xyz=HINDI_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(xyz);
                                                    //alert("Hello World!"+xy);
                                                    });
                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                    }
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="kannada"){
                                                    //var k=KANNADA_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(KANNADA_URL);
                                                    //alert("Hello World!"+xy);
                                                    });
                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                    }
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="telugu"){
                                                    //var k=KANNADA_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(TELUGU_URL);
                                                    //alert("Hello World!"+xy);
                                                    });
                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                    }
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="english"){
                                                    //var k=KANNADA_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(ENGLISH_URL);
                                                    //alert("Hello World!"+xy);
                                                    });
                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                    }
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="malayalam"){
                                                    //var k=KANNADA_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(MALAYALAM_URL);
                                                    //alert("Hello World!"+xy);
                                                    });


                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }

                    }
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="trending"){
                                                    //var k=KANNADA_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(TRENDING_URL);
                                                    //alert("Hello World!"+xy);
                                                    });

                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                    }



//return xy;


//getMovies(url)=demosum();
//------------------------------------------------------------------------------------------------------

//x=demo();
//window.alert(x);
//alert("hi this is "+xy);

function getMovies(url) {
    lastUrl = url;
    //alert("this is "+lastUrl);

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
        const {title, poster_path, backdrop_path, popularity, vote_count, vote_average, overview, release_date, adult, original_title, original_language, video, id, provider_name, logo_path} = movie;
        var vote1=vote_average
        if(vote1>0){
        vote1=vote_average;
        }
        else{
        vote1="TBA";
        }
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "https://via.placeholder.com/950/000000/FFFFFF/?text=No Poster Available" }" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span id="sample" class="${getColor(vote1)} d-flex-row justify-content right">${vote1}</span>
            </div>
            <div class="overview">
                <h5>Overview</h5}
                <p>Movie-Name: ${title}</p>
                <p>Rating: ${vote1}<p>

                <p>Release-Date: ${release_date}<p>
                <p>Vote-Count: ${vote_count}<p>
                



                <button class="know-more" id="${id}">Know More</button
            </div>


        `

        main.appendChild(movieEl);
        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(movie)
        })

    })
}
//=========================================================================================================
const overlayContent = document.getElementById('overlay-content');

function openNav(movie) {
  let id = movie.id;
  fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
    console.log(videoData);
    if(videoData){
      document.getElementById("myNav").style.width = "100%";
      document.getElementById("myNav").style.height = "100%";

      var content = `
        <h1 class="no-results">${movie.title}</h1>
        <br/>

        <p id="resultq"> Story-line  <br> <br>${movie.overview}</p><br>
        <p id="resultq"> Original-Title: ${movie.original_title} </p><br>
        <p id="resultq"> Related Videos </p><br>


        `

      if(videoData.results.length > 0){
        var embed = [];
        var dots = [];

        videoData.results.forEach((video, idx) => {
          let {name, key, site} = video

          if(site == 'YouTube'){

            embed.push(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          `)

            dots.push(`
              <span class="dot">${idx + 1}</span>
            `)
          }
        })


        var content2=`
        ${embed.join('')}
        <br/>

        <div class="dots">${dots.join('')}</div>

        `
        overlayContent.innerHTML = content+content2;
        activeSlide=0;
        showVideos();
      }else{
        overlayContent.innerHTML = content+`<center><h1 class="no-results">No Results Found</h1></center>`
      }
    }
  })
}

//===================================

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}







//============================================================================================================
        form1.addEventListener('submit', (e) => {
                 e.preventDefault();

                 const searchTerm = search.value;

                 if(searchTerm) {
                         getMovies(searchURL+'&query='+searchTerm);
                 }
                 else{
                      getMovies(API_URL);
                 }

        })
//========================================================================================


//========================================================================================
function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else if(vote> 0){
    return "red"
    }
    else{
        return 'blue'
    }
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
    form1.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }
})

next.addEventListener('click', () => {
  if(nextPage <= totalPages){
    pageCall(nextPage);
    form1.scrollIntoView({block: "start", inline: "nearest"})
    //form.scrollIntoView({behavior : 'smooth'})
    //{block: "end", inline: "nearest"}
  }
})

function pageCall(page){
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getMovies(url);
    console.log(url)
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
    console.log(url)

  }
}










