import { combineReducers } from 'redux';
import { SuggestionsReducer } from './reducer_suggestions';
import { ActiveSuggestionReducer } from './reducer_active_suggestion';

const rootReducer = combineReducers({
    activeSuggestion: ActiveSuggestionReducer,
    suggestions: SuggestionsReducer
});

export default rootReducer;
