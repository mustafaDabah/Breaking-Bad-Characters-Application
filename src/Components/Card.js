import React from 'react';
import { Link } from 'react-router-dom';

function Card({image , birthday, name , nickname , id }) {
    return (
        <div className="card-body">
           <img alt="img pokemon" src={image} />
           <h3>name : {name}</h3>
           <h3>birthday : {birthday} </h3>
           <h3>nickname : {nickname} </h3>
           <Link to={`/character/${id}`}>show details </Link>
        </div>
    )
}

export default Card;
