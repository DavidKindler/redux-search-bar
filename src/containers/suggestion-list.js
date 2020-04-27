import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSuggestionAction } from '../actions/action_select_suggestion';

class SuggestionList extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }
    
    renderList() {
        return this.props.suggestions.data.map((suggestion, index) => {
            return (
                <tr
                    key={index}
                    onMouseOver={() => this.props.selectSuggestion(suggestion.name)}
                    onClick={() => alert(suggestion.name)}
                >
                    <td>{suggestion.name}</td>
                </tr>
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

function mapStateToProps(reduxState) {
    return {
         // this comes from our suggestions reducer
        suggestions: reduxState.suggestions
    }
}
 
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectSuggestion: selectSuggestionAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);
