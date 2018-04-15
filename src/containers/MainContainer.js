// lib/main.js
import { connect } from 'react-redux';

import Main from '../components/Main';

// Vamos a empezar convirtiendo Main en un MainContainer
const MainContainer = connect(
  function mapStateToProps(state) {
    // del MainReducer en el estado inicial
    const { 
      filteredProducts
    } = state.AppReducer;

    return {
      products: filteredProducts
    };
  }
)(Main)

export default MainContainer;

