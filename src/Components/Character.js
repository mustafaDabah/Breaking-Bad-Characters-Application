import React  from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';


function Character({match}) {
    // fetch data 
    const {data:character , loading} =useFetch(`https://www.breakingbadapi.com/api/characters/${match.params.id}`)
    return (
        <div className="details">
            <h1>character details </h1>
            {!loading && <div>loading data...</div>}
            {character && character.map(item => {
                return (
                    <div className="character-container" key={item.char_id} >
                        <img alt="img pokemon" src={item.img} />
                        <div className="info">
                            <h3>name : {item.name}</h3>
                            <h3>birthday : {item.birthday} </h3>
                            <h3>nickname : {item.nickname} </h3>
                            <h3>portrayed : {item.portrayed} </h3>
                            <h3>status : {item.status} </h3>
                            <h3>occupation : {item.occupation[0]} </h3>
                            <h3>occupation : {item.occupation[1]} </h3>
                            <Link to="/">go to home </Link>
                        </div>
                   </div>
                )
            })}
        </div>
    )
}

export default Character
