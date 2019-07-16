import React from 'react';
import './card.css'
const Card = (prop) => {

  return (
    <div className='card-image'>
      <img src={`https://robohash.org/${prop.robotImage}`} alt="The robot"/>
      <div>
        <h3>{prop.name}</h3>
        <p>{prop.email}</p>
      </div>
    </div>
  )
}

export default Card;