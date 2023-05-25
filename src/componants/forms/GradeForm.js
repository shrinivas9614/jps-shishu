import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import Adminsidebar from "../Admin/adminSidebard";
export default function GradeForm() {
  return (
    <div>
      <Adminsidebar/>
      <h2 className=""> Grade Form </h2>
      <div className="content-wrapper-client-lead" style={{ minHeight: " 1043px" }}>
        <section className="container-fluid-leads-grid">
          <Form>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Grade ID</FormLabel>
                  <FormControl placeholder="grade ID" name="grade id" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Grade Code</FormLabel>
                  <FormControl placeholder="grade code" name="grade code" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>created Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Updated Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>created by</FormLabel>
                  <FormControl placeholder="created by"></FormControl>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Updated by</FormLabel>
                  <FormControl placeholder="Updated by"></FormControl>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl placeholder="Name" />
                </FormGroup>
              </Col>
            </Row>

            <div className="d-flex justify-content-center mt-3 ">
              <Button md={2} type="submit">
                {" "}
                insert grade{" "}
              </Button>
            </div>
          </Form>
          </section>
          </div>
      
    </div>
  );
}
