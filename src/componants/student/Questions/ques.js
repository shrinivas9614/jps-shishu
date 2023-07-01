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
              <Card.Title className="p-3 "> प्रश्न १. </Card.Title>
              <Card.Title className="p-3 ">जंगलाचा राजा कोण आहे?</Card.Title>
              <Row className="d-flex m-2 p-2 bg-white rounded">
                <Col>
                  <Form className="p-5 mx-5">
                    <Form.Check type="radio" id="option">
                      <Form.Check.Input
                        type="radio"
                        name="option"
                        value="camel"
                      />
                      <Form.Check.Label className=" mx-5 text-center">
                        <img
                          className="border border-primary mx-1"
                          src={Camel}
                          alt="camel"
                          style={{ width: "150px", height: "auto" }}
                        />
                        <br />
                        उंट
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio" id="option">
                      <Form.Check.Input
                        type="radio"
                        name="option"
                        value="tiger"
                      />
                      <Form.Check.Label className=" mx-5 text-center">
                        <img
                          className="border border-primary mx-1"
                          src={Tiger}
                          alt="tiger"
                          style={{ width: "150px", height: "auto" }}
                        />
                        <br />
                        वाघ
                      </Form.Check.Label>
                    </Form.Check>
                    {/* <Form.Check
                      className=" mb-2"
                      type="radio"
                      label="Option 1"
                      name="radioGroup"
                      value="option1"
                    />
                    <Form.Check
                      className="mb-2"
                      type="radio"
                      label="Option 2"
                      name="radioGroup"
                      value="option2"
                    />
                    <Form.Check
                      className="mb-2"
                      type="radio"
                      label="Option 3"
                      name="radioGroup"
                      value="option3"
                    />
                    <Form.Check
                      className="mb-2"
                      type="radio"
                      label="Option 4"
                      name="radioGroup"
                      value="option4"
                    /> */}
                  </Form>
                </Col>
                <Col>
                  <Form className="p-4 mx-5">
                    <Form.Check type="radio" id="option">
                      <Form.Check.Input
                        type="radio"
                        name="option"
                        value="elephant"
                      />
                      <Form.Check.Label className=" mx-5 text-center">
                        <img
                          className="border border-primary mx-1"
                          src={Elephant}
                          alt="elephant"
                          style={{ width: "150px", height: "auto" }}
                        />
                        <br />
                        हत्ती
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio" id="option">
                      <Form.Check.Input
                        type="radio"
                        name="option"
                        value="elephant"
                      />
                      <Form.Check.Label className=" mx-5 text-center">
                        <img
                          className="border border-primary mx-1"
                          src={Lion}
                          alt="elephant"
                          style={{ width: "150px", height: "auto" }}
                        />
                        <br />
                        सिंह
                      </Form.Check.Label>
                    </Form.Check>
                  </Form>
                </Col>
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
