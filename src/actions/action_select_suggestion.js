// Actions are plain javascript objects.  
// They have a type and a payload of information.

export function selectSuggestionAction(suggestion) {
    
    return {
        type: 'SUGGESTION_SELECTED',
        suggestion: suggestion
    }
}

