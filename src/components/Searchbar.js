import React from 'react';
import { FaSearch } from 'react-icons/fa';


function SearchBar({ handleSearch }) {
  return (
    <div className='search-bar'>
        <input
        onChange={(e) =>
            handleSearch(e.target.value)
        }
        type='text'
        placeholder='search keywords....'
        />
        <FaSearch type='button' className='search-button'/>
    </div>
  )
}

export default SearchBar
