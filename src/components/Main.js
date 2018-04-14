import React from 'react';
import PropTypes from 'prop-types';
import FilterableProductTable from './FilterableProductTable';

const products = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7' }
];

const Main = () => (
  <FilterableProductTable products={products}/>
)

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Main;