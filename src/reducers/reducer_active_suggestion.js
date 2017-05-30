// state argument is not applicatoin state, only the state this reducer is responsible for
export default function(state = null, action) {
// console.log ('Action',action)
// console.log ('state',state)
    switch (action.type) {
        case 'SUGGESTION_SELECTED':
            return (action.payload) ? action.payload : '';   
        case 'NEW_SUGGESTION':
            console.log(action)
            return 'WTF';
    }

    // return state;
    return '';
}
