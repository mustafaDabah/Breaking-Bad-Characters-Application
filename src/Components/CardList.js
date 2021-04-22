import React , {useContext , useEffect , useState} from 'react';
import { GlobalContext } from '../ContextAPI/GlobalState';
import Card from './Card';
import Pagination from './Pagination';
import useFetch from './useFetch';

function CardList() {
    const {characters , search , dispatch } = useContext(GlobalContext);
    const {loading , data} = useFetch('https://www.breakingbadapi.com/api/characters');
    const [currentPage , setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(8);

    // add characters to characters state by context 
    const addCharacters = (data) => {
      dispatch({
        type:"ADD_CHARACTERS",
        payload:data
      })
    }
    useEffect (() => {
      addCharacters(data)
    },[data])
    
    // paginate functions 
    const indexOfLastChar = currentPage * charactersPerPage ;
    const indexOfFirstChar = indexOfLastChar - charactersPerPage ;
    // current Characters 
    const currentCharacters = characters.slice(indexOfFirstChar , indexOfLastChar);
    // page count 
    let pageCount = Math.ceil(characters.length / charactersPerPage) ;
    // paginate display count when search 
    const isSearch = search.length >= 1 ? 1 : pageCount 
    const changePage = ({selected}) => {
      setCurrentPage(selected + 1 );
    };
    
    // filter characters function search 
    const filterCharacters = search.length <= 0 ? (currentCharacters) :
    (
      characters.filter((character) => 
      character.name.toLowerCase().includes(search.toLowerCase()
      )) 
    );
    return (
      <div className="card-list">
        <div className="cards-container">
            {!loading && <div>loading data...</div>}
            {data && filterCharacters.map(item =>
              <Card 
                key={item.char_id} 
                name={item.name}
                birthday={item.birthday}
                image={item.img}
                nickname={item.nickname} 
                id={item.char_id}
                />
            )}
        </div>
         <Pagination changePage={changePage} pageCount={isSearch} />
       </div>
    )
}

export default CardList
