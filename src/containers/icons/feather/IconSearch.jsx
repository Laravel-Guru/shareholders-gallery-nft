import { connect } from "react-redux";
import { iconSearch } from "../../../redux/actions/iconactions/iconAction";
import Search from "../../../components/icons/feather/IconSearch";

const mapStateToProps = state => ({
  searchTerm: state.Icons.feather.iconSearch
});

const mapDispatchToProps = dispatch => ({
  onChange: searchTerm => dispatch(iconSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
