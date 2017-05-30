import React, { Component } from 'react';
import SearchBar from './searchbar';
import SearchList from './searchlist';
import getSearch from './get-search';
import _ from 'lodash';
import SuggestionList from '../containers/suggestion-list';
import KeywordInput from '../containers/keyword-input'

class KeywordSuggest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: []
        }
        this.runSearch = this.runSearch.bind(this);
    }

    runSearch(term) {
        getSearch(term).then(
            (data) => this.setState( { keywordArr: data })
        );
    }

    render() {
        const keywordSearch = _.debounce((term) => { this.runSearch(term) }, 150);
        return (
        <div className="row">
            <div className="col-sm-6">        
                <SearchBar onSearchTermChange={keywordSearch} />
                <SearchList keywordArr={this.state.keywordArr} tableClass="table table-borderd table-condensed table-hover" />  
            </div>
                <div className="col-sm-6">    
                <h4>redux suggestion list </h4> 
                <KeywordInput onSearchTermChange={keywordSearch}  />
                <SuggestionList tableClass="table table-borderd table-condensed table-hover" />
            </div>
        </div>
        );
    }
}

export default KeywordSuggest;

//  <SuggestionList tableClass="table table-borderd table-condensed table-hover" />    