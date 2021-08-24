
//-------------------------------------------------------------------------------------------------------------

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=9a85a018f878f3af62f324c75c332248';

//const API_URL = BASE_URL + '/discover/movie?region=IN&'+API_KEY+'&with_original_language=te';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;



const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
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
const tamil = document.getElementById('tamil');
//getMovies(API_URL);


//----------------------------------------------------------below code is for getting the id's from html------------------------------------------------------------------
 
var el_up = document.getElementById("");
		var el_down = document.getElementById("");
		

		function gfg_Run() {
			var ID = [];
			$("*").each(function() {
				if (this.id) {
					ID.push(this.id);
				}
			});
			
            return ID;
		}
        var z=gfg_Run();
        //alert(z);
        //alert(z.length);
        //alert(Object.values(z)[0]);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for tamil movies 
        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="tamil"){
                                                    //var xy=TAMIL_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(TAMIL_URL);
                                                    //alert("Hello World!"+xy);
                                                    });
                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                        }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for hindi movies

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for kannada movies

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for telugu movies

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for hindi movies

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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for hindi movies

        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="malayalam"){
                                                    //var k=MALAYALAM_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(MALAYALAM_URL);
                                                    //alert("Hello World!"+xy);
                                                    });


                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }

                    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//code for trending movies

        for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="trending"){
                                                    //var k=TRENDING_URL;
                                                    document.getElementById(Object.values(z)[i]).addEventListener("click", function() {
                                                    getMovies(TRENDING_URL);
                                                    //alert("Hello World!"+xy);
                                                    });

                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

        /*for (var i = 0; i < z.length; i++) {
                        if(Object.values(z)[i]=="search"){
                                                    //var k=KANNADA_URL;

                                                    form.addEventListener('submit', (e) => {
                                                        e.preventDefault();

                                                         const searchTerm = search.value;

                                                        if(searchTerm) {
                                                            getMovies(searchURL+'&query='+searchTerm);
                                                        }
                                                        else{
                                                        getMovies(lastUrl);
                                                        }

                                                    })
                                                    //alert("Hello World!"+xy);
                                                   }

                        //alert(Object.values(z)[i]);
                        //alert(xy);
                        }
                        */



//return xy;



//------------------------------------------------------------------------------------------------------

//x=demo();
//window.alert(x);
//alert("hi this is "+xy);
//-------------------------------------------------------------------------------------------------------------
		function getMovies(url) {
				    lastUrl = url;
				    alert("this is "+lastUrl);

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
									    }
									else if(currentPage>= totalPages){
										      prev.classList.remove('disabled');
										      next.classList.add('disabled')

									    }
									else{
										      prev.classList.remove('disabled');
										      next.classList.remove('disabled')
									    }


							}
					    
       							 else{
								main.innerHTML=`<h1 class= "noResult">No Result Found</h1>`
							 }


			    		})

			}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------------------------------------------------------------------
    
	form.addEventListener('submit', (e) => {
				 e.preventDefault();

				 const searchTerm = search.value;

				 if(searchTerm) {
					 getMovies(searchURL+'&query='+searchTerm);
				 }
			 //else{
			    //  getMovies(lastUrl);
			 // }

	})




	function getColor(vote) {
				    if(vote>= 8){
						return 'green'
				    }
		
				   else if(vote >= 5){
					return "orange"
				    }
				   else{
					return 'red'
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
						    form.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
						  }
	})

	next.addEventListener('click', () => {
						  if(nextPage <= totalPages){
						    pageCall(nextPage);
						    form.scrollIntoView({block: "start", inline: "nearest"})
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
				  }
				  else{
					    key[1] = page.toString();
					    let a = key.join('=');
					    queryParams[queryParams.length -1] = a;
					    let b = queryParams.join('&');
					    let url = urlSplit[0] +'?'+ b
					    getMovies(url);
					    console.log(url)

				 }
	}










