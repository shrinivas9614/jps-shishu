/** @format */

import React, { useEffect, useState } from "react";
import ReactSelect, { components } from "react-select";
import { answerOptions } from "../utils/Utils";
import { Formik } from "formik";
import api from "./APIS";
import Swal from "sweetalert2";

import {
  Col,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function MCQQuestionForm(props) {
  const [optionSelected, setOptionSelected] = useState("");
  const [questionType, setQuestionType] = useState(props?.mcq ? true : false);
  const [typeOfQuestion, setTypeOfQuestion] = useState(
    props?.mcq
      ? "objective"
      : props?.match
      ? "matching_question"
      : "relevent_picture"
  );

  const handleChangeOptions = (selected) => {
    setOptionSelected(selected);
  };

  useEffect(() => {
    // getGrades();
  }, []);

  const getGrades = () => {
    console.log("gets");
    api
      .get("/grade-api")
      .then((res) => {
        console.log("response", res);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "File submitted successfully!",
        }).then((response) => {});
      })
      .catch((error) => {
        console.log("error", error);
        alert("Error");
      });
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          option5: "",
          option6: "",
          question: "",
          option_count: 6,
          mark: "",
          grade_id: "",
          chapter_id: "",
          subject_id: "",
          answer: "",
        }}
        // validationSchema={{}}
        onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
          values.answer = optionSelected;
          const formData = {
            match_the_pairs_question: {},
            multiple_choice_question: {},
            select_relevent_picture_question: {},
            question_type: typeOfQuestion,
          };
          if (typeOfQuestion == "objective") {
            formData["multiple_choice_question"] = values;
          }
          api
            .post("/question-api", formData)
            .then((res) => {
              console.log("response", res);
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "File submitted successfully!",
              }).then(() => {});
            })
            .catch((error) => {
              console.log("error", error);
              alert("Error");
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          status,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Col md={6}>
                <FormGroup>
                  <FormLabel>Grade</FormLabel>
                  <Form.Select
                    name="grade_id"
                    onChange={handleChange}
                    selected={values.grade_id}
                  >
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
                  <Form.Select
                    name="subject_id"
                    onChange={handleChange}
                    selected={values.subject_id}
                  >
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
                  <Form.Select
                    name="chapter_id"
                    onChange={handleChange}
                    selected={values.chapter_id}
                  >
                    <option>Select Chapter</option>
                    <option>Chapter 1</option>
                    <option>Chapter 2</option>
                    <option>Chapter 3</option>
                    <option>Chapter 4</option>
                    <option>Chapter 5</option>
                  </Form.Select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label>Marks</Form.Label>
                  <Form.Control
                    type="number"
                    // step={0.1}
                    id="mark"
                    name="mark"
                    placeholder="Marks"
                    value={values.mark}
                    onChange={handleChange}
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
                    value={values.question}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md={6}>
                <FormGroup>
                  <Form.Label>
                    {questionType ? "Option 1" : "Pair 1"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="option1"
                    value={values.option1}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file1"
                      class="form-control-file"
                      id="img1"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label>
                    {questionType ? "Option 2" : "Pair 2"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="option2"
                    value={values.option2}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file2"
                      class="form-control-file"
                      id="img2"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label>
                    {questionType ? "Option 3" : "Pair 3"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="option3"
                    value={values.option3}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file3"
                      class="form-control-file"
                      id="img3"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label>
                    {questionType ? "Option 4" : "Pair 4"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="option4"
                    value={values.option4}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file4"
                      class="form-control-file"
                      id="img4"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label>
                    {questionType ? "Option 5" : "Pair 5"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="option5"
                    value={values.option5}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Form.Label>
                    {questionType ? "Option 6" : "Pair 6"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="option6"
                    value={values.option6}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file6"
                      class="form-control-file"
                      id="img6"
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <hr />
            {props.mcq == true ? (
              <Row className="mb-2">
                <Col md={6}>
                  <Form.Group as={Col} controlId="my_multiselect_field">
                    <Form.Label>Answer</Form.Label>
                    <ReactSelect
                      name="answer"
                      options={answerOptions}
                      closeMenuOnSelect={false}
                      hideoptionSelecteds={false} // Corrected prop name
                      components={{
                        Option,
                      }}
                      allowSelectAll={true}
                      value={optionSelected}
                      onChange={handleChangeOptions}
                      isMulti
                    />
                  </Form.Group>
                </Col>
              </Row>
            ) : (
              ""
            )}
            <Row className="mb-2">
              <Col md={12}>
                <div className="d-flex gap-2 justify-content-center mt-3 ">
                  <Button variant="primary" type="submit" size="lg">
                    Submit
                  </Button>
                  <Button variant="primary" size="lg">
                    Reset
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MCQQuestionForm;
