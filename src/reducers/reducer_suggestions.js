
export default function(state = [], action) {

    switch (action.type) {
        // initial request before API call.  Here we can add a loading icon if needed
        case 'REQUEST_SUGGESTIONS':
            return state;

        // after API is called and the promise is resolved we return the payload to the app state            
        case 'RECEIVE_SUGGESTIONS':
            return action.payload

    }

    return state;
}