const API_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=6223976c4480b3ecc1b4510be6017cb2"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1"
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjIzOTc2YzQ0ODBiM2VjYzFiNDUxMGJlNjAxN2NiMiIsInN1YiI6IjY0ZGQyYjhmNWFiODFhMDExYzJkNzM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqMUIPKA1b_G90U04RQKLgojzebhq2qlV_uzWm4M0pw",
  },
}

const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies(API_URL)

async function getMovies(url) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
  } catch {
    console.log("error:" + err)
  }

  form.addEventListener("submit", (e) => {
    e.eventDefault()
    const searchTerm = search.value
    console.log("searchTerm", searchTerm)

    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm)
      search.value = ""
    } else {
      window.location.reload()
    }
  })
}
