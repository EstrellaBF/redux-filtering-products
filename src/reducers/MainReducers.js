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
  filterText: '',
  inStockOnly: false
};

export default (state = INIT_STATE, action) => {
  // console.log(state = INIT_STATE); //arroja filtered products y original products
  // console.log(actionTypes.FILTER_TEXT_CHANGED); // FILTER_TEXT_CHANGED
  switch (action.type) {
    case actionTypes.FILTER_TEXT_CHANGED:
      state = {
        ...state,
        filterText: action.text
      }
      break;
    case actionTypes.IN_STOCK_ONLY_CHANGED:
      state = {
        ...state,
        inStockOnly: action.value
      }
      break;
    default:
      return state;
  }
  if (
    action.type === actionTypes.FILTER_TEXT_CHANGED ||
    action.type === actionTypes.IN_STOCK_ONLY_CHANGED
  ) {
    // console.log(actionTypes); //{FILTER_TEXT_CHANGED: "FILTER_TEXT_CHANGED", IN_STOCK_ONLY_CHANGED: "IN_STOCK_ONLY_CHANGED"}
    // console.log(action.type); //IN_STOCK_ONLY_CHANGED o FILTER_TEXT_CHANGED, dependiendo donde se hace click 
    const filteredProducts = state.originalProducts.filter(p => {
      // console.log(state.originalProducts); // Lanza toda la data
      // console.log(p); //cada objeto de la data {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"}
      const filterText =
        (action.type === actionTypes.FILTER_TEXT_CHANGED ?
          action.text :
          state.filterText).trim();
          // console.log(action.type); //IN_STOCK_ONLY_CHANGED o FILTER_TEXT_CHANGED
          // console.log(action.text); // value del input
          // console.log(state.filterText);  // value del input
          const inStockOnly =
        action.type === actionTypes.IN_STOCK_ONLY_CHANGED ?
        action.value :
          state.inStockOnly
          // console.log(action.value); // true o false dependiendo el click 
          // console.log(state.inStockOnly); // true o false dependiendo el click 
          return (
        (inStockOnly) ? p.stocked : true &&
          p.name.match(new RegExp(filterText, 'ig'))
      )
    })

    state = {
      ...state,
      filteredProducts
    }
    // console.log(state) //{filteredProducts: Array(4), originalProducts: Array(6), filterText: "", inStockOnly: true}
  }
  return state;
}
