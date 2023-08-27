const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=7550b615756fe130d66e4d864b1015b4"
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&access_token' + encodeURIComponent('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUwYjYxNTc1NmZlMTMwZDY2ZTRkODY0YjEwMTViNCIsInN1YiI6IjY0ZGQyYjhmNWFiODFhMDExYzJkNzM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tI3q1Ckk5p_V01IS_B5eRYem0MAUXoW9t_ncAqPB0_Q')
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUwYjYxNTc1NmZlMTMwZDY2ZTRkODY0YjEwMTViNCIsInN1YiI6IjY0ZGQyYjhmNWFiODFhMDExYzJkNzM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tI3q1Ckk5p_V01IS_B5eRYem0MAUXoW9t_ncAqPB0_Q'
//   }
// };
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=7550b615756fe130d66e4d864b1015b4&query='
// 'https://api.themoviedb.org/3/search/movie?access_token' + encodeURIComponent('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUwYjYxNTc1NmZlMTMwZDY2ZTRkODY0YjEwMTViNCIsInN1YiI6IjY0ZGQyYjhmNWFiODFhMDExYzJkNzM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tI3q1Ckk5p_V01IS_B5eRYem0MAUXoW9t_ncAqPB0_Q')

const form = document.getElementById("form")
const search = document.getElementById("search")

// get initial movies

getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ""

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
    
    const movieEL = document.createElement("div")
    movieEL.classList.add("movie")
    movieEL.innerHTML = `
<img src="${IMG_PATH + poster_path}" alt="${title}" />
<div class="movie-info">
  <h3>${title}</h3>
  <span class="${getClassByVote(vote_average)}">${vote_average.toFixed(1)}</span>
</div>
<div class="overview">
  <h3>Overview</h3>
  ${overview}
</div>
`
    main.appendChild(movieEL)
  })
}

function getClassByVote(vote) {
  if (vote >= 8) {
    return "green"
  } else if (vote >= 5) {
    return "orange"
  } else {
    return "red"
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const searchTerm = search.value
  
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm)
    search.value = ""
  } else {
    window.location.reload()
  }
  console.log("searchTerm", SEARCH_API + searchTerm)

})
