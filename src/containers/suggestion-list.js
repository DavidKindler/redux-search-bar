import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSuggestion } from '../actions/action_set_active_suggestion';
import { bindActionCreators } from 'redux';

class SuggestionList extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }
    
    renderList() {
        // console.log(this.props.suggestions)
        return this.props.suggestions.map((suggestion, index) => {
            return (
                <tr
                    key={index}
                    onMouseOver={() => this.props.selectSuggestion(suggestion.name)}
                    onClick={() => alert(suggestion.name)}
                >
                    <td>{suggestion.name}</td></tr>
            )
        })
    }  

    render() {
        return (
            <table className={this.props.tableClass}>
                <tbody >
                    {this.renderList()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        suggestions: state.suggestions,
        activeSuggestion: state.activeSuggestion
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectSuggestion: selectSuggestion }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
