import React from 'react';

const SearchBar = ({searchfield, searchChange}) => {
    return(
        <div className='ma4'>
            <input 
            type='search' 
            placeholder='Search Robots ' 
            className='pa3'
            onChange ={searchChange}>
            </input>
        </div>
    ) 
}

export default SearchBar; 