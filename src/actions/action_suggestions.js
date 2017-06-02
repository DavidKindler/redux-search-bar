import axios from 'axios';

export function requestSuggestions(activeSuggestion) {
    return {
        type: 'REQUEST_SUGGESTIONS',
        payload: activeSuggestion
    }
}


export function receiveSuggestions(newSuggestions) {
    return {
        type: 'RECEIVE_SUGGESTIONS',
        payload: newSuggestions
    }
}

const ROOT_URL = `https://desolate-stream-50260.herokuapp.com/proxy?url=http://www.nxp.com/suggest?max=10&site=nxp_en&client=nxp_search_all_results&format=rich`

export function getSuggestions(term) {
    const url = `${ROOT_URL}&q=${term}`

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return dispatch => {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestSuggestions(term))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return axios.get(url)
        .then(response => response.data.results )
        .then(data => dispatch(receiveSuggestions(data)) )  

  }
}
