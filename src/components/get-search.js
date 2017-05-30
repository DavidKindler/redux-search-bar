// import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const ROOT_URL = `https://desolate-stream-50260.herokuapp.com/proxy?url=http://www.nxp.com/suggest?max=10&site=nxp_en&client=nxp_search_all_results&format=rich`

const ROOT_URL2 = `//www.nxp.com/webapp/search/gsaSearchApi?param=std&num=10`;


export default function getSearch(term) {
    // const url2 = `${ROOT_URL2}&q=${term}`
    //  return axios.get(url2, {})
    //      .then(function (response) {
    //          if (_.hasIn(response, "data.GSP.RES")) {
    //             let payload =  response.data.GSP.RES.R.map((data) => data.S)
    //            return payload
    //          }    
    //      });
    
    const url = `${ROOT_URL}&q=${term}`
    return $.ajax({ url: url, jsonp: "callback", dataType: "jsonp" })
        .then((response) => {
            // console.log ('response',response)
           return  response.results.map((data) => data.name)
        })

    
}

