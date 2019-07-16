import React, { useState, useEffect } from 'react';
import CardList from './component/CardList';
import SearchBox from './component/SearchBox';
import './App.css';

function App() {
  const [robot, setRobot] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => setRobot(robot.concat(data)))
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const filteredRobot = robot.filter(elem => elem.name.toLowerCase()
    .includes(search.toLowerCase()))

  return (

    <div className="App">
      <h1>Robo Friends</h1>
      <SearchBox handleChange={handleChange} />
      <CardList robot={filteredRobot} />
    </div>
  );
}

export default App;
