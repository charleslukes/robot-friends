import React from 'react';
import './SearchBox.css';

const SearchBox = (prop) => {

  return (
    <div className='search'>
      <input type="text" placeholder="Search.." onChange={prop.handleChange} />
    </div>
  )
}


export default SearchBox;