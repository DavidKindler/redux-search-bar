
export const SuggestionsReducer =  (state = { data:[], loading: false}, action) => {

    switch (action.type) {
        // initial request before API call.  Here we can add a loading icon if needed
        case 'REQUEST_SUGGESTIONS':
        // Return a new Object with old state and loading value  
            return Object.assign({},state,{
                loading: action.loading
            })

        // after API is called and the promise is resolved we return the payload to the app state
        // Promises are handled by middleware and then sent to Redux dispatcher
        case 'RECEIVE_SUGGESTIONS':
            return {
                data: action.suggestions,
                loading: action.loading
            }

    }

    return state;
}
