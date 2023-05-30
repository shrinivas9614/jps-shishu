import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export default function GradeForm() {
  return (
    <div>
      
      <h2 className=""> Grade Form </h2>
      <div className="content-wrapper-client-lead" style={{ minHeight: " 1043px" }}>
        <section className="container-fluid-leads-grid">
          <Card>

          <Card.Header style={{ backgroundColor: "transparent" }} className="border-0 ">
        <Row>
                <Col>
                  <Link className="float-end fs-2 text-danger" onClick={() => { _setOpenCallback("list") }}>
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>

        </Card.Header>
        <Card.Body>
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

        </Card.Body>
          </Card>
                    </section>
          </div>
      
    </div>
  );
}
