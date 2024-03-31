import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Searchbar({handleSearch}) {
  return (

    <div className='search-bar'>
      <FaSearch className='search-button' />
      <input
				onChange={(e) =>
					handleSearch(e.target.value)
				}
				type='text'
				placeholder='search keywords....'
		/>

    </div>
  )
}

export default Searchbar
