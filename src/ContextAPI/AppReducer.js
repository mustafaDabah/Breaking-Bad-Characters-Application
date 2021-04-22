const AppReducer = (state , action) => {
    switch (action.type) {
        case "ADD_SEARCH":
            return {
                ...state, 
                search:action.payload
            };
        case "ADD_CHARACTERS" :
            return {
                ...state ,
                characters:action.payload
            }   
        default:
            return state;
    }
}
export default AppReducer