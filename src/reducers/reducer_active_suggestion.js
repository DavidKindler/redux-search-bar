// state argument is not applicatoin state, only the state this reducer is responsible for

export const ActiveSuggestionReducer = (state = '', action) => {
    switch (action.type) {
        case 'SUGGESTION_SELECTED':
            return action.suggestion;
    }

    return state;
}
