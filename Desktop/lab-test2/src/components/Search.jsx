import React from 'react'

const Search = ({onChangeCity, onSearch}) => {
  return (
    <div className='Search'>
        <input
            
            type='text'
            onChange={(e) => onChangeCity(e.target.value)}
            placeholder='Enter a city'
        />
        <button 
        
        onClick={onSearch}>Search</button>
    </div>
  )
}

export default Search