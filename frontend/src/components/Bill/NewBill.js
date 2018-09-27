import React, { Component } from "react";
import { create } from "./API";
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
import NumberFormat from "react-number-format";

class NewBill extends Component {
  state = {
    bill: {
      name: "",
      value: "",
      type: 0
    },
    types: ["INPUT", "OUTPUT"]
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    const { bill } = this.state;
    bill[name] = value;
    this.setState({ bill });
  };

  onValueChange = (values, e) => {
    const { floatValue } = values;
    const { bill } = this.state;
    bill.value = floatValue;
    this.setState({ bill });
  };

  onSubmit = async e => {
    const { name, type, value } = this.state.bill;
    try {
      const { data } = await create(name, type, value);
    } catch (error) {
      console.log("Error", error);
    }
  };

  render() {
    const { bill, types } = this.state;
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <Form className="pt-4">
              <FormGroup>
                <Label>Bill Name:</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter a bill name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Bill Value:</Label>
                <NumberFormat
                  value={bill.value}
                  name="value"
                  prefix={"R$"}
                  thousandSeparator={true}
                  className="form-control"
                  onValueChange={this.onValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Bill Type:</Label>
                <Input type="select" name="type" onChange={this.onChange}>
                  {types.map((type, index) => (
                    <option value={type} key={index}>
                      {type}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button color="primary" onClick={this.onSubmit}>
                  Create new Bill
                </Button>
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
