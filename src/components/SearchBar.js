import React from 'react';

const SearchBar = ({ filterText, setFilterText }) => (
  <form>
    <input
      type="text"
      placeholder="Busca aquí"
      value = {filterText}
      onChange={ e => {
        setFilterText(e.target.value)
      }}
    />
    <p>
      <input 
        type="checkbox"
        onChange={evt => {
          console.log(evt.target)
        }}
      />
      {' '}
      Mostrar solo productos en stock
    </p>
  </form>
)

export default SearchBar