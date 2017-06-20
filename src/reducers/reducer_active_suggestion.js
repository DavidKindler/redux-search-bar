// Get the current selected suggestion.  This could be from the suggestion list or input field
export const ActiveSuggestionReducer = (state = '', action) => {
    switch (action.type) {
        case 'SUGGESTION_SELECTED':
            return action.suggestion;
    }

    return state;
}
