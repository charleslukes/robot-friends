import React from 'react';
import Card from './card';
import './cardlist.css';

const CardList = (prop) => {
  const robot = prop.robot;
  return (
    <div className='card-list'>
      {robot.length ? robot.map(elem => <Card robotImage={elem.id} name={elem.name}
        email={elem.email} key={elem.id} />) :
        <Card robotImage='sejkre'
          name='Jane Doe' email='janedoe@gmail.com' />
      }
    </div>
  );
}

export default CardList;
