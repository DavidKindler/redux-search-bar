import axios from 'axios';
const ROOT_URL = `https://desolate-stream-50260.herokuapp.com/proxy?url=http://www.nxp.com/suggest?max=10&site=nxp_en&client=nxp_search_all_results&format=rich`

export function requestSuggestionsAction(term) {
    return {
        type: 'REQUEST_SUGGESTIONS',
        loading: true
    }
}


export function receiveSuggestionsAction(results) {
    return {
        type: 'RECEIVE_SUGGESTIONS',
        suggestions: results,
        loading: false
    }
}


export function getSuggestionsAction(term) {
    const url = `${ROOT_URL}&q=${term}`

  // We use Thunk middleware to handle functions such as API calls.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return dispatch => {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestSuggestionsAction(term))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for and then dispatch the next action
    return axios.get(url)
        .then(response => response.data.results )
        .then(results => dispatch(receiveSuggestionsAction(results)) )  

  }
}
