import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" className="text-center">
            <h1 className="pt-4">Welcome</h1>
            <h2 className="mb-4">Bills Manager</h2>
            <Link to="/bills" className="btn btn-secondary">
              Bills list
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
