/** @format */

import React, { useState } from "react";

import {
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

function MatchThePairForm() {
  return (
    <div>
      {/* <h2 className="d-flex justify-content-center ">Question Form</h2> */}
      <Form>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Grade</FormLabel>
              <Form.Select>
                <option>Select Grade</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>I</option>
                <option>II</option>
              </Form.Select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <Form.Select>
                <option>Select Subject</option>
                <option>Marathi</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Maths</option>
                <option>Drawing</option>
              </Form.Select>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Chapter</FormLabel>
              <Form.Select>
                <option>Select Chapter</option>
                <option>Chapter 1</option>
                <option>Chapter 2</option>
                <option>Chapter 3</option>
                <option>Chapter 4</option>
                <option>Chapter 5</option>
              </Form.Select>
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row className="mb-2">
          <Col md={12}>
            <FormGroup>
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                id="question"
                name="question"
                placeholder="Question"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 1</Form.Label>
              <Form.Control type="text" id="option_1" name="option_1" />
              <div class="form-group mt-3">
                <input type="file" class="form-control-file" id="img1" />
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 2</Form.Label>
              <Form.Control type="text" id="option_2" name="option_2" />
              <div class="form-group mt-3">
                <input type="file" class="form-control-file" id="img2" />
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 3</Form.Label>
              <Form.Control type="text" id="option_3" name="option_3" />
              <div class="form-group mt-3">
                <input type="file" class="form-control-file" id="img3" />
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 4</Form.Label>
              <Form.Control type="text" id="option_4" name="option_4" />
              <div class="form-group mt-3">
                <input type="file" class="form-control-file" id="img4" />
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 5</Form.Label>
              <Form.Control type="text" id="option_5" name="option_5" />
              <div class="form-group mt-3">
                <input type="file" class="form-control-file" id="img5" />
              </div>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 6</Form.Label>
              <Form.Control type="text" id="option_6" name="option_6" />
              <div class="form-group mt-3">
                <input type="file" class="form-control-file" id="img6" />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group as={Col} controlId="my_multiselect_field">
              <Form.Label>Answer</Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={12}>
            <div className="d-flex gap-2 justify-content-center mt-3 ">
              <Button variant="primary" size="lg">
                Submit
              </Button>
              <Button variant="primary" size="lg">
                Reset
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default MatchThePairForm;
