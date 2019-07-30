import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import {setSearchField} from '../actions';
import './App.css';

const mapStateToProps = state => ({
  searchField: state.searchField
})

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

function App(props) {
  const [robot, setRobot] = useState([]);
  const {searchField} = props;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => setRobot(robot.concat(data)))
  },[]);

  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // }

  const filteredRobot = robot.filter(elem => elem.name.toLowerCase()
    .includes(searchField.toLowerCase()))

  return (

    <div className="App">
      <h1>Robo Friends</h1>
      <SearchBox handleChange={props.handleChange} />
      <CardList robot={filteredRobot} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
