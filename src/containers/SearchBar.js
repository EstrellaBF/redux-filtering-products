import { connect } from 'react-redux';
import SearchBarComponent from '../components/SearchBar';
import { filterTextChanged } from '../actions/action';

const SearchBarContainer = connect (
  function mapStateToProps(state) {
    const {
      filtertext
    } = state.AppReducer;

    return {
      filtertext
    }
  },
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText));
      }
    }
  }

)(SearchBarComponent);

export default SearchBarContainer;
