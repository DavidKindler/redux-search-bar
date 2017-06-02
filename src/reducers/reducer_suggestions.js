
export default function(state = [{name: ''}], action) {

    switch (action.type) {
        case 'REQUEST_SUGGESTIONS':
            return state;

        case 'RECEIVE_SUGGESTIONS':
            return action.payload

    }

    return state;
}
