import React from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Camel from "./images/camel.jpeg";
import Elephant from "./images/elephant.jpeg";
import Lion from "./images/Lion.jpg";
import Tiger from "./images/tiger.jpg";
import Rabbit from "./images/rabbit.jpeg";
import Zebra from "./images/zebra.jpeg";

function Ques() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <CardHeader className="m-3">MCQ QUESTIONS</CardHeader>
            <Card.Body style={{ background: "#E7E7E7" }}>
              <Card.Title className="p-3 ">QUESTION 1</Card.Title>
              <Row className="d-flex m-1 p-2 bg-white rounded">
                <Form className="p-4 mx-5">
                  <Row className="mb-2">
                    <Col md={4}>
                      <Form.Check type="radio" id="option1">
                        <Form.Check.Input
                          type="radio"
                          name="option1"
                          value="camel"
                        />
                        <Form.Check.Label className=" mx-5 text-center">
                          <img
                            className="border border-primary mx-1 mb-2"
                            src={Camel}
                            alt="camel"
                            style={{ width: "150px", height: "auto"}}
                          />
                          <br />
                          Camel
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>

                    <Col md={4}>
                      <Form.Check type="radio" id="option2">
                        <Form.Check.Input
                          type="radio"
                          name="option2"
                          value="elephant"
                        />
                        <Form.Check.Label className=" mx-5 text-center">
                          <img
                            className="border border-primary mx-1 mb-2"
                            src={Lion}
                            alt="elephant"
                            style={{ width: "150px", height: "auto" }}
                          />
                          <br />
                          Lion
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>

                    <Col md={4}>
                      <Form.Check type="radio" id="option3">
                        <Form.Check.Input
                          type="radio"
                          name="option3"
                          value="tiger"
                        />
                        <Form.Check.Label className=" mx-5 text-center">
                          <img
                            className="border border-primary mx-1 mb-2"
                            src={Tiger}
                            alt="tiger"
                            style={{ width: "150px", height: "auto" }}
                          />
                          <br />
                          Tiger
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col md={4}>
                      <Form.Check type="radio" id="option4">
                        <Form.Check.Input
                          type="radio"
                          name="option4"
                          value="elephant"
                        />
                        <Form.Check.Label className=" mx-5 text-center">
                          <img
                            className="border border-primary mx-1 mb-2"
                            src={Elephant}
                            alt="elephant"
                            style={{ width: "150px", height: "auto" }}
                          />
                          <br />
                          Elephant
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>

                    <Col md={4}>
                      <Form.Check type="radio" id="option5">
                        <Form.Check.Input
                          type="radio"
                          name="option5"
                          value="rabbit"
                        />
                        <Form.Check.Label className=" mx-5 text-center">
                          <img
                            className="border border-primary mx-1 mb-2"
                            src={Rabbit}
                            alt="rabbit"
                            style={{ width: "150px", height: "auto" }}
                          />
                          <br />
                          Rabbit
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>

                    <Col md={4}>
                      <Form.Check type="radio" id="option6">
                        <Form.Check.Input
                          type="radio"
                          name="option6"
                          value="zebra"
                        />
                        <Form.Check.Label className=" mx-5 text-center">
                          <img
                            className="border border-primary mx-1 mb-2"
                            src={Zebra}
                            alt="zebra"
                            style={{ width: "150px", height: "auto" }}
                          />
                          <br />
                          Zebra
                        </Form.Check.Label>
                      </Form.Check>
                    </Col>
                  </Row>
                </Form>
              </Row>

              <Row>
                <Col className="text-end">
                  <Button variant="outline-primary m-3">Previous</Button>
                  <Button variant="outline-primary">Next</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Ques;
