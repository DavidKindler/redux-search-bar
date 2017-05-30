import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSuggestion } from '../actions/action_set_active_suggestion';
import { getNewSuggestions } from '../actions/action_get_new_suggestions';
import { bindActionCreators } from 'redux';

class KeywordInput extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''} 
        this.onInputChange = this.onInputChange.bind(this);
    }    

    onInputChange(term) {
        this.setState({ term: term })
        this.props.onSearchTermChange(term);
        this.props.selectSuggestion(term);
        // this.props.getNewSuggestions(term);
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

function mapStateToProps(state) {
    return {
        activeSuggestion: state.activeSuggestion
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectSuggestion: selectSuggestion,
        getNewSuggestions: getNewSuggestions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordInput);

