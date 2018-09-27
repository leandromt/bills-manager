import React, { Component } from "react";
import { findAll } from "./API";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

class NewBill extends Component {
  state = {
    bills: []
  };

  async componentDidMount() {
    const bills = await this.onFindAll();
    this.setState({ bills });
  }

  onFindAll = async () => {
    try {
      const { data } = await findAll();
      return data && data.bills;
    } catch (error) {
      console.log("Error", error);
    }
  };

  render() {
    const { bills } = this.state;
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <Link to="/bills/new" className="btn btn-primary mt-2 mb-2">
              Create new Bill
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="12">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill, index) => (
                  <tr key={index}>
                    <td>{bill.name}</td>
                    <td>{bill.value}</td>
                    <td>{bill.type}</td>
                    <td>
                      <Button color="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewBill;
