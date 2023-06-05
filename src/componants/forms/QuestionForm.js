import React from "react";

import {
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
function MCQQuestionForm() {
  return (
    <div>
      {/* <h2 className="d-flex justify-content-center ">Question Form</h2> */}
      <Form>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Question Id</FormLabel>
              <FormControl name="question_id" placeholder="question id" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Language Id</FormLabel>
              <FormControl name="language_id" placeholder="language id" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <FormLabel>Subject Id</FormLabel>
              <FormControl
                name="subject id"
                id="subject_id"
                placeholder="subject id"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FormLabel>Chapter Id</FormLabel>
              <FormControl
                name="chapter id"
                id="chapter_id"
                placeholder="chapter id"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <Form.Label>Question Type</Form.Label>
              <Form.Control
                type="text"
                id="question_type"
                name="question"
                placeholder="Question type"
              />
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
          <Col md={12}>
            <FormGroup>
              <Form.Label>Question Image</Form.Label>
              <Form.Control
                type="file"
                id="question_image"
                name="question image"
                placeholder="upload image"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 1</Form.Label>
              <Form.Control type="text" id="option_1" name="option" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 2</Form.Label>
              <Form.Control type="text" id="option_2" name="option" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 3</Form.Label>
              <Form.Control type="text" id="option_3" name="option" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Option 4</Form.Label>
              <Form.Control type="text" id="option_4" name="option" />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row className="mb-2">
          <Col md={6}>
            <FormGroup>
              <Form.Label>Answer</Form.Label>
              <Form.Control
                type="text"
                id="answer"
                name="answer"
                placeholder="Answer"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={12}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer Explaination</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={12}>
            <FormGroup>
              <Form.Label>Answer Explaination Image</Form.Label>
              <Form.Control
                type="file"
                id="answer_explain_image"
                name="answer image"
                placeholder="upload image"
              />
            </FormGroup>
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

export default MCQQuestionForm;
