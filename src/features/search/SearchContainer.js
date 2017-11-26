import { connect } from 'react-redux';
import Search from './Search';
// import { changeSearch, getSearch} from './duck';

const mapStateToProps = state => {
    const { search }  = state.navbar;

    return {
        search
    };
};

const mapDispatchToProps = dispatch => {
  return {
    // handleSearchChange: search => {
    //   dispatch(changeSearch(search));
    // },
    // handleGetSearch: name => {
    //   dispatch(getSearch(name));
    // }
  }
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default NavBarContainer;