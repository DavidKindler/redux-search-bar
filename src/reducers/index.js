import { combineReducers } from 'redux';
import SuggestionReducer from './reducer_suggestions';
import ActiveSuggestionReducer from './reducer_active_suggestion';

const rootReducer = combineReducers({
    suggestions: SuggestionReducer,
    activeSuggestion: ActiveSuggestionReducer
});

export default rootReducer;
