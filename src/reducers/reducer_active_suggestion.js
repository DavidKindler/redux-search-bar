// state argument is not applicatoin state, only the state this reducer is responsible for
export default function(state = '', action) {
// console.log ('Action',action)
// console.log ('state',state)
    switch (action.type) {
        case 'SUGGESTION_SELECTED':
            // console.log('reducer_active_suggestion action.payload ==>', action.payload)
            // console.log('reducer_active_suggestion state ==>', state)
            // console.log ('suggestion_selected returning ==>', action.payload)    
            return action.payload;
            // return (action.payload) ? action.payload : '';
            // case 'NEW_SUGGESTION':
            //     console.log('NEW_SUGGESTION reducer',action)
            //     return 'WTF';
        //  case 'GET_SUGGESTION':
        //     return [
        //         { name: 'kinetis' },
        //         { name: 'kinetis design studio' },
        //         { name: 'kinetis sdk' },
        //         { name: 'kinetis bootloader' },
                
        //     ]    
    }

    // return state;
    return state;
}
