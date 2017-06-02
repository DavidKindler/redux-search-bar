import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSuggestion } from '../actions/action_select_suggestion';
import { bindActionCreators } from 'redux';

class SuggestionList extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }
    
    renderList() {
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
        // if (!this.props.suggestions) {
        //     return <div>No suggestions yet</div>
        // }
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
