import { connect } from 'react-redux';
import NavBar from './NavBar';
import {changeTab, changeSearch, getSearch} from './duck';

const mapStateToProps = state => {
    const { search, activeTab }  = state.navbar;

    return {
        search,
        activeTab
    };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: search => {
      dispatch(changeSearch(search));
    },
    handleTabChange: tab => {
      dispatch(changeTab(tab));
    },
    handleGetSearch: name => {
      dispatch(getSearch(name));
    }
  }
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;