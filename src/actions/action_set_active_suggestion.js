export function selectSuggestion(activeSuggestion) {
    // console.log('selectSuggestion ==>', activeSuggestion)
    //selectSuggestion is an Action Creator, it needs to return an action, an object with a type property.
    return {
        type: 'SUGGESTION_SELECTED',
        payload: activeSuggestion
    }
}

