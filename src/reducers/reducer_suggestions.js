
export const SuggestionsReducer =  (state = { data:[], loading: true}, action) => {

    switch (action.type) {
        // initial request before API call.  Here we can add a loading icon if needed
        case 'REQUEST_SUGGESTIONS':
            return Object.assign({},state,{
                loading: action.loading
            })

        // after API is called and the promise is resolved we return the payload to the app state            
        case 'RECEIVE_SUGGESTIONS':
            return {
                data: action.suggestions,
                loading: action.loading
            }

    }

    return state;
}
