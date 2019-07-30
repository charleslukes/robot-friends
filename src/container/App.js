import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import {setSearchField, requestRobots} from '../actions';
import './App.css';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) 
  }
}

function App(props) {
  
  const {searchField, robots, isPending, error} = props;

  useEffect(() => {
    props.onRequestRobots()
  },[]);

  // const handleChange = (event) => {
  //   setSearch(event.target.value);
  // }

  const filteredRobot = robots.filter(elem => elem.name.toLowerCase()
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
