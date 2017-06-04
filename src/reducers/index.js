import { combineReducers } from 'redux';
import { SuggestionsReducer } from './reducer_suggestions';
import { ActiveSuggestionReducer } from './reducer_active_suggestion';

const rootReducer = combineReducers({
    suggestions: SuggestionsReducer,
    activeSuggestion: ActiveSuggestionReducer
});

export default rootReducer;
