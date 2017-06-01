// import axios from 'axios';
import $ from 'jquery';
// import _ from 'lodash';

const ROOT_URL = `https://desolate-stream-50260.herokuapp.com/proxy?url=http://www.nxp.com/suggest?max=10&site=nxp_en&client=nxp_search_all_results&format=rich`

function getSuggestions(term) {
    const url = `${ROOT_URL}&q=${term}`
    return $.ajax({ url: url, jsonp: "callback", dataType: "jsonp" })
        .then((response) => {
            console.log ('response',response)
           return  response.results.map((data) => data)
        }) 
}

// export default function () {

//     // const url = `${ROOT_URL}&q=kinetis`;
    
//     // $.ajax({ url: url, jsonp: "callback", dataType: "jsonp" })
//     //     .then((response) => {
//     //         console.log ('response',response)
//     //        console.log('response returned', response.results.map((data) => data) )
//     //     }) 


//     return [
//         { name: 'kinetis' },
//         { name: 'kinetis design studio' },
//         { name: 'kinetis sdk' },
//         { name: 'kinetis bootloader' },
        
//     ]
// }

export default function(state = [{name: ''}], action) {

    switch (action.type) {
        case 'GET_SUGGESTION':
            console.log('reducer_suggestion, GET_SUGGESTION action ==>', action)
            console.log('reducer_suggestion, GET_SUGGESION state ==>', state)
            // break;    
            return [
                { name: 'kinetis' },
                { name: 'kinetis design studio' },
                { name: 'kinetis sdk' },
                { name: 'kinetis bootloader' },
                
            ]
    }

    return state;
    // return [{ name: '' } ];
}
