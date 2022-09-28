import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MainCard from '../../components/maincard/MainCard';
import Search from '../../containers/icons/feather/IconSearch';
import IconList from '../../containers/icons/feather/IconList';

class FeatherIcon extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="Feather Icons">
            <Search />
            <IconList />
          </MainCard>
        </Col>
      </Row>
    );
  }
}

export default FeatherIcon;