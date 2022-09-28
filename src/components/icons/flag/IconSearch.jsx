import React from "react";
import { Form, Input } from "reactstrap";
import PropTypes from "prop-types";

const IconSearch = ({ onChange, searchTerm }) => (
  <div className="h-list-header">
    <Form onSubmit={e => e.preventDefault()}>
      <Input
        type="text"
        className="mb-4"
        placeholder="search . . "
        onChange={e => onChange(e.target.value)}
        value={searchTerm}
      />
    </Form>
  </div>
);

IconSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default IconSearch;
