import React, { Component } from "react";
import { findAll } from "./API";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";

class NewBill extends Component {
  state = {
    bill: {
      name: "",
      value: "",
      type: 0
    },
    type: ["INPUT", "OUTPUT"]
  };

  render() {
    const { bill, type } = this.state;
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <Form>
              <FormGroup>
                <Label>Bill Name:</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter a bill name"
                />
              </FormGroup>
              <FormGroup>
                <Label>Bill Value:</Label>
              </FormGroup>
              <FormGroup>
                <Label>Bill Type:</Label>
                <Input type="select" name="type">
                  {type.map((type, index) => (
                    <option value={type} key={index}>
                      {type}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button color="primary">Create new Bill</Button>
                <Link to="/bills" className="btn btn-secondary">
                  Back to list
                </Link>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewBill;
