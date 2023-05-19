import React from 'react';
import { SideBar, Forms } from './index';
import { Col, Container, Row } from 'react-bootstrap';

const Student = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3} lg={2}>
          <SideBar />
        </Col>
        <Col xs={12} md={9} lg={10}>
          <Forms />
        </Col>
      </Row>
    </Container>
  );
};

export default Student;
