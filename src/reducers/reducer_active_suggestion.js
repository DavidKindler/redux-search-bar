// state argument is not applicatoin state, only the state this reducer is responsible for
export default function(state = '', action) {
    switch (action.type) {
        case 'SUGGESTION_SELECTED':
            return action.payload;
    }

    return state;
}
