import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ handleSearch }) => {
  return (
    <div>
      <input className='searchInput'
             onChange={(e) => handleSearch(e.target.value)} />
      <h4 className='search-label'>type to search</h4>
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func
}
