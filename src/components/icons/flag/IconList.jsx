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
        <div className="i-block" id={`icon-${props.id}`}>
          <i
            className={`flag flag-icon-background flag-icon-squared ${
              props.icon
            }`}
          />
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
  <div className="i-main">
    {icon.map((icon, i) => (
      <Icon icon={icon} id={i} key={i} />
    ))}
  </div>
);

IconList.propTypes = {
  icon: PropTypes.array.isRequired
};

export default IconList;
