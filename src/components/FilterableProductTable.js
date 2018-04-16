import React from 'react';
// import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import SearchBar from '../containers/SearchBar';

const FilterableProductTable = ({ products }) => (
  <div>
    <SearchBar />
    <ProductTable products={products}/>
  </div>
)

export default FilterableProductTable;