import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer';
// initialState
const initialState = {
    characters:[],
    search:""
}
// create context
export const GlobalContext = createContext(initialState);
// Provider component 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{
            characters:state.characters,
            search:state.search,
            dispatch
        }} >
            {children}
        </GlobalContext.Provider>
    )
}