import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import CardList from './CardList';

function Home() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <CardList/>  
        </div>
    )
}

export default Home
