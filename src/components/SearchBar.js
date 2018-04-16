import React from 'react';

const SearchBar = ({ 
  filterText, setFilterText ,
  inStockOnly, setInStockOnly
}) => (
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
        checked={inStockOnly}
        onChange={evt => {
          setInStockOnly(evt.target.checked)
        }}
      />
      {' '}
      Mostrar solo productos en stock
    </p>
  </form>
)

export default SearchBar