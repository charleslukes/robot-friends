import React, { useState, useEffect } from 'react';
import Card from './card'

const CardList = () => {
  const [robot, setRobot] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => setRobot(robot.concat(data)))
  }, [])

  console.log(robot)
  return (
    <div className='App'>
      {robot.length ? robot.map(elem => <Card robotImage={elem.id} name={elem.name}
        email={elem.email} key={elem.id} />) :
        <Card robotImage='sejkre'
          name='Jane Doe' email='janedoe@gmail.com' />
      }
    </div>
  );
}

export default CardList;
