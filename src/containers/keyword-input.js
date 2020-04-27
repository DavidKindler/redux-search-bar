import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSuggestionAction } from '../actions/action_select_suggestion';
import { getSuggestionsAction } from '../actions/action_suggestions';

class KeywordInput extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''} 
        this.onInputChange = this.onInputChange.bind(this);
    }    

    onInputChange(term) {
        this.setState({ term: term })
        this.props.selectSuggestion(term);
        this.props.getSuggestions(term);
    }    
    
    render() {
        return (
                 <input 
                    className="form-control" 
                    placeholder="Search..."
                    value={ this.props.activeSuggestion }
                    onChange={event => this.onInputChange(event.target.value)}
                    onMouseEnter={event => this.props.selectSuggestion(this.state.term)}           
                 />
        );
    }

}

function mapStateToProps(reduxState) {
    //whatever object is returned from app state is setup as component props.
    // whenever app state changes this container will get updated.
    return {
        // this comes from our active suggestion reducer
        activeSuggestion: reduxState.activeSuggestion
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectSuggestion: selectSuggestionAction,
        getSuggestions: getSuggestionsAction,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordInput);
// The connection function from react-redux maps the redux state to the component
// and turns it into a 'container'.

