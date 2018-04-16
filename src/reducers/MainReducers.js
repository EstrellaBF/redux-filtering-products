import { actionTypes } from '../actions/action';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7' }
];

const INIT_STATE = {
  filteredProducts: PRODUCTS,
  originalProducts: PRODUCTS,
  filterText: ''
};

export default ( state = INIT_STATE, action) => {
  switch(action.type) {
    case actionTypes.FILTER_TEXT_CHANGED:
    state = {
      ...state,
      filterText: action.text
    }
    break;
    default:
      return state;
  }
  if (
    action.type = actionTypes.FILTER_TEXT_CHANGED
  ) {
    const filteredProducts = state.originalProducts.filter( p=> {
      const filterText = 
        (action.type === actionTypes.FILTER_TEXT_CHANGED ?
          action.text :
          state.filterText).trim();

    })

    state = {
      ...state,
      filteredProducts
    }
  }
  return state;
}
