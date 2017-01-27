import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOmdbData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

export function getOmdbDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {
        dispatch(addOmdbData(imdbID, response.data))
      })
      .catch((error) => console.error('axios error', error))
  }
}
