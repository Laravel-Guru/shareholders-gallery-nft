import { connect } from "react-redux";
import IconList from "../../../components/icons/feather/IconList";

const filterChats = (icons, iconSearch) => {
  if (iconSearch !== "")
    return icons.filter(t =>
      t.toLocaleLowerCase().includes(iconSearch.toLocaleLowerCase())
    );
  else return icons;
};

const mapStateToProps = state => ({
  icon: filterChats(state.Icons.feather.icon, state.Icons.feather.iconSearch)
});

export default connect(mapStateToProps)(IconList);
