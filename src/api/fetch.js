// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows/`, options).then(res => res.json())
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE"}
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res)=>res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  const options ={
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows/${id}`,options).then(res =>res.json())
}

// Movies

//Create Movies
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${URL}/movies/`, options).then((response) => {
    return response.json();
  });
}

//Index/Get All
export function getAllMovies(id) {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

//Get One Movie
export function getOneMovie(id){
  return fetch(`${URL}/movies/${id}`).then((res) => res.json());
} 

// Delete Movies 
export function destroyMovie(id){
  const options = { method: "DELETE"}
  return fetch(`${URL}/shows/${id}`, options)
}

// Update
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"},
  }
  return(
    fetch(`${URL}/movies/${id}`, options)
    .then((res) => {
      return(
        res.json()
      )
    })
  )
}

//Created Functions 

export function filterShows(search, shows){
  return shows.filter((show) => show.title.toLowerCase().match(search.toLowerCase()))
}

