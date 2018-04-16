import { connect } from 'react-redux';
import SearchBarComponent from '../components/SearchBar';

const SearchBarContainer = connect (
  function mapStateToProps(state) {
    const {
      filtertext
    } = state.AppReducer

    return {
      filtertext
    }
  }
)(SearchBarComponent);

export default SearchBarContainer;
