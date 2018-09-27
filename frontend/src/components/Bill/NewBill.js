import React, { Component } from "react";
import { findAll } from "./API";
import { Container, Row, Col, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";

class NewBill extends Component {
  state = {
    bills: {}
  };

  render() {
    const { bill } = this.state;
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <Form>form</Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewBill;
