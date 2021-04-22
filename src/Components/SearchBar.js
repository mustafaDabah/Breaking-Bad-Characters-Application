import React , {useContext , useState ,useEffect } from 'react';
import { GlobalContext } from '../ContextAPI/GlobalState';


function SearchBar() {
    const {dispatch} = useContext(GlobalContext);
    const [searchTerm , setSearchTerm] = useState("");
    // handle change input 
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    } 
    // add search function 
    const addSearch = (searchTerm) => {
        dispatch({
            type:"ADD_SEARCH",
            payload:searchTerm
        });
    }
    useEffect(() => {
        addSearch(searchTerm);
    } , [searchTerm])

    return (
        <>
            <form>
                <input type='text' placeholder="search to characters" value={searchTerm} onChange={handleChange} />
            </form>
        </>
    )
}

export default SearchBar
