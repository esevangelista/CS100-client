import { connect } from 'react-redux';
import NavBar from './NavBar';
import { changeSearch, getSearch} from './duck';

const mapStateToProps = state => {
    const { search }  = state.navbar;

    return {
        search,
    };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: search => {
      dispatch(changeSearch(search));
    },
    handleGetSearch: name => {
      dispatch(getSearch(name));
    }
  }
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;