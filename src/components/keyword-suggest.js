import React, { Component } from 'react';
import SuggestionList from '../containers/suggestion-list';
import KeywordInput from '../containers/keyword-input'
import _ from 'lodash';

class KeywordSuggest extends Component {

    render() {
        const keywordSearch = _.debounce((term) => { this.runSearch(term) }, 150);
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
