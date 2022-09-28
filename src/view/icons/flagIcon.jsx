import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Search from '../../containers/icons/flag/IconSearch';
import IconList from '../../containers/icons/flag/IconList';
import MainCard from '../../components/maincard/MainCard';

class FlagIcon extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="Flag Icons">
            <Search />
            <IconList />
          </MainCard>
        </Col>
      </Row>
    );
  }
}

export default FlagIcon;