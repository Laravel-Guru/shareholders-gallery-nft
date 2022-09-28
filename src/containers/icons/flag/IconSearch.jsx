import { connect } from "react-redux";
import { iconSearch } from "../../../redux/actions/iconactions/iconAction";
import Search from "../../../components/icons/flag/IconSearch";

const mapStateToProps = state => ({
  searchTerm: state.Icons.flag.iconSearch
});

const mapDispatchToProps = dispatch => ({
  onChange: searchTerm => dispatch(iconSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
