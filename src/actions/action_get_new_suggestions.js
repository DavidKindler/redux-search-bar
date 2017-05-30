export function getNewSuggestions(activeSuggestion) {
    console.log('getNewSuggestions', activeSuggestion)
    //selectSuggestion is an Action Creator, it needs to return an action, an object with a type property.
    return {
        type: 'GET_SUGGESTION',
        payload: activeSuggestion
    }
}
