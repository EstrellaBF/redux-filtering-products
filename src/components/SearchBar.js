import React from 'react';

const SearchBar = () => (
  <form>
    <input
      type="text"
      placeholder="Busca aquí"
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