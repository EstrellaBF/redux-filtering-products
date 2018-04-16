import { connect } from 'react-redux';
import SearchBarComponent from '../components/SearchBar';
import { filterTextChanged, inStockOnlyChanged } from '../actions/action';

const SearchBarContainer = connect (
  function mapStateToProps(state) {
    const {
      filtertext,
      inStockOnly
    } = state.AppReducer;

    return {
      filtertext,
      inStockOnly
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText));
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue))
      }
    }
  }

)(SearchBarComponent);

export default SearchBarContainer;
