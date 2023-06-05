import React from "react";
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
// import Adminsidebar from "../Admin/adminSidebard";
import { Link } from "react-router-dom";
const AssesmentForm = (_setOpenCallback) => {
  return (
    <>
      <div style={{ minHeight: " 1043px" }}>
        <section className="container-fluid-leads-grid">
          <Card>
            <Card.Header
              style={{ backgroundColor: "transparent" }}
              className="border-0 "
            >
              <Row>
                <Col>
                  <Link
                    className="float-end fs-2 text-danger"
                    onClick={() => {
                      _setOpenCallback("list");
                    }}
                  >
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel> Assesment Name </FormLabel>
                    <FormControl
                      placeholder="asswsment name"
                      name="assesment_name"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Date of Assesment</FormLabel>
                    <FormControl type="date" placeholder="Date of Assesment" name="date" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>Class</FormLabel>
                    <FormControl placeholder="class" name="standerd" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Subject of Assesment </FormLabel>
                    <FormControl placeholder="subject" name="subject" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Total Marks</FormLabel>
                    <FormControl placeholder="total marks" name="total marks" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <FormLabel>types of Questions </FormLabel>
                    <Form.Select>
                      <option>mcq </option>
                      <option> match </option>
                      <option> objectivve </option>
                      <option>@@##</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <FormLabel>Teacher name</FormLabel>
                    <FormControl
                      placeholder="teacher name"
                      name="teacher_name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit"> submit </Button>
                </Col>
              </Row>
            </Card.Header>
          </Card>
        </section>
      </div>
    </>
  );
};

export default AssesmentForm;
