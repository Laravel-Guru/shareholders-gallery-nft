import React from "react";
import { Tooltip } from "reactstrap";

import PropTypes from "prop-types";

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div className="d-inline-block p-3 border-light border" id={`icon-${props.id}`}>
          <i className={`feather ${props.icon}`} />
        </div>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target={`icon-${props.id}`}
          toggle={this.toggle}
        >
          {props.icon}
        </Tooltip>
      </React.Fragment>
    );
  }
}

const IconList = ({ icon }) => (
  <div className="d-block">
    {icon.map((icon, i) => (
      <Icon icon={icon} id={i} key={i} />
    ))}
  </div>
);

IconList.propTypes = {
  icon: PropTypes.array.isRequired
};

export default IconList;
