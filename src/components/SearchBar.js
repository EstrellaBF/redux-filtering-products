import React from 'react';

const SearchBar = ({ filterText }) => (
  <form>
    <input
      type="text"
      placeholder="Busca aquí"
      value = {filterText}
    />
    <p>
      <input 
        type="checkbox"
      />
      {' '}
      Mostrar solo productos en stock
    </p>
  </form>
)

export default SearchBar