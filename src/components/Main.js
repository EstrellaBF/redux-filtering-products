import React from 'react';
import PropTypes from 'prop-types';
import FilterableProductTable from './FilterableProductTable';

const Main = ({ products }) => (
  <div>
    <FilterableProductTable products={products}/>
  </div>
)

// Main.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default Main;