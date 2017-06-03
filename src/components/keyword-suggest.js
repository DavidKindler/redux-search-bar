import React, { Component } from 'react';
import SuggestionList from '../containers/suggestion-list';
import KeywordInput from '../containers/keyword-input'

// import { connect } from 'react-redux';

class KeywordSuggest extends Component {

    render() {
        // let title = (this.props.suggestions) ?  <h4 className={this.props.suggestions.loading ? "red" : "green"}>redux suggestion list </h4> : <h4>redux suggestion list </h4> 
       
        return (
        <div className="row">
                <div className="col-sm-6">    
                <h4>redux suggestion list </h4>     
                <KeywordInput />      
                <SuggestionList tableClass="table table-borderd table-condensed table-hover" />
            </div>
        </div>
        );
    }
}
export default KeywordSuggest;

// function mapStateToProps(state) {
//     return {
//         suggestions: state.suggestions,
//     }
// }
 

// export default connect(mapStateToProps)(KeywordSuggest);