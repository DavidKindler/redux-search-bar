import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSuggestion } from '../actions/action_set_active_suggestion';
import { getSuggestions } from '../actions/action_suggestions';
import { bindActionCreators } from 'redux';

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

function mapStateToProps(state) {
    return {
        activeSuggestion: state.activeSuggestion
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectSuggestion: selectSuggestion,
        getSuggestions: getSuggestions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordInput);

