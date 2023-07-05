import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Formik } from "formik";
import api from "../forms/APIS";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactSelect, { components } from "react-select";

export const ViewAssessmentInfo = ({ Id, _setOpenCallback }) => {
  console.log("view", Id);
  const [view, setView] = useState();
  const [SelectedQuestions, setSelectedQuestions] = useState([]);

  const getAssessmentinfo = () => {
    api
      .get("/assessment-detail/" + Id + "/")
      .then((response) => {
        setView(response.data); // update the state with the fetched data
        setSelectedQuestions(response.data.questions);
        console.log("ass view data:- ", response.data);
      })
      .catch((error) => {
        console.error(error); // handle any errors
      });
  };
  useEffect(() => {
    getAssessmentinfo();
  }, []);

  console.log("view", view);

  return (
    <>
      <Card>
        <Card.Header
          style={{ backgroundColor: "transparent" }}
          className="border-0"
        >
          <Row>
            <Col>
              <Link
                className="float-end fs-5 text-danger"
                onClick={() => {
                  _setOpenCallback("list");
                }}
              >
                <i className="fa fa-times" />
              </Link>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel>Assessment Name</FormLabel>
                <FormControl value={view?.title} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Teacher Name</FormLabel>
                <FormControl
                  value={
                    view?.teacher_id.firstname + " " + view?.teacher_id.lastname
                  }
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Date of Assessment</FormLabel>
                <FormControl
                  value={new Date(view?.date)
                    .toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .split("/")
                    .join("/")}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <FormGroup>
                <FormLabel>Grade</FormLabel>
                <FormControl
                  value={view?.chapter_id.subject_id.grade_id.name}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Select Subject</FormLabel>
                <FormControl value={view?.chapter_id.subject_id.name} />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <FormLabel>Chapter</FormLabel>
                <FormControl value={view?.chapter_id.name} />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <FormGroup>
                <FormLabel>Test Type</FormLabel>
                <FormControl value={view?.test_type} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Start Time</FormLabel>
                <FormControl value={view?.start_time} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>End Time</FormLabel>
                <FormControl value={view?.end_time} />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col>
              <FormGroup>
                <FormLabel>Types of Questions</FormLabel>
                <FormControl value={view?.question_type} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Total Marks</FormLabel>
                <Form.Control value={view?.marks} />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel>Test Duration</FormLabel>
                <Form.Control value={view?.test_duration} />
              </FormGroup>
            </Col>
          </Row>

          {/* ================================================== */}
          <Row className="mt-4">
            <h4>Multiple Choice Questions</h4>
          </Row>
          <ul style={{ marginRight: "40px" }}>
            {SelectedQuestions.map((quest, index) => (
              <ol key={quest.id}>
                <div
                  className="row ques_div"
                  id="assess_test_row"
                  style={{ fontSize: "19px" }}
                >
                  <div className="row">
                    <div className="col-lg-10 que_option">
                      <lable style={{ marginRight: "80px", fontSize: "19px" }}>
                        Q{" "}
                        {`${index + 1}. ${
                          quest?.multiple_choice_question?.question
                        }`}
                      </lable>
                      <span
                        className="oval"
                        style={{
                          backgroundColor: "rgb(20, 221, 94)",
                          marginTop: "3px",
                        }}
                      ></span>
                    </div>
                    <div className="col-lg-1">
                      <span>
                        <input
                          id="weight797"
                          type="number"
                          placeholder="Marks"
                          className="form-control"
                          value={quest.multiple_choice_question?.mark}
                          style={{ paddingRight: "0px" }}
                          disabled
                        />
                      </span>
                    </div>
                    <div className="col-lg-1">
                      <span className="que_tag">marks</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-11">
                      <span className="que_option" style={{ fontSize: "18px" }}>
                        <span>
                          <input type="radio" disabled />
                          <label style={{ paddingLeft: "20px" }}>
                            <p>{quest.multiple_choice_question?.option1}</p>
                          </label>
                        </span>
                      </span>
                      <span className="que_option" style={{ fontSize: "18px" }}>
                        <span>
                          <input type="radio" disabled />
                          <label style={{ paddingLeft: "20px" }}>
                            <p>{quest.multiple_choice_question?.option2}</p>
                          </label>
                        </span>
                      </span>
                      <span className="que_option" style={{ fontSize: "18px" }}>
                        <span>
                          <input type="radio" disabled />
                          <label style={{ paddingLeft: "20px" }}>
                            <p>{quest.multiple_choice_question?.option3}</p>
                          </label>
                        </span>
                      </span>
                      <span className="que_option" style={{ fontSize: "18px" }}>
                        <span>
                          <input type="radio" disabled />
                          <label style={{ paddingLeft: "20px" }}>
                            <p>{quest.multiple_choice_question?.option4}</p>
                          </label>
                        </span>
                      </span>
                      <span className="que_option" style={{ fontSize: "18px" }}>
                        <span>
                          <input type="radio" disabled />
                          <label style={{ paddingLeft: "20px" }}>
                            <p>{quest.multiple_choice_question?.option5}</p>
                          </label>
                        </span>
                      </span>
                      <span className="que_option" style={{ fontSize: "18px" }}>
                        <span>
                          <input type="radio" disabled />
                          <label style={{ paddingLeft: "20px" }}>
                            <p>{quest.multiple_choice_question?.option6}</p>
                          </label>
                        </span>
                      </span>

                      <span className="que_option" style={{ fontSize: "19px" }}>
                        <span>
                          <Row className="md-3">
                            <Col>
                              <FormLabel>
                                Chapter:- {quest.chapter_id?.name}
                              </FormLabel>
                            </Col>
                            <Col>
                              <FormLabel style={{ color: "green" }}>
                                {" "}
                                Correct Answer:{" "}
                                {/* {quest.multiple_choice_question?.answer.length}
                                {quest.multiple_choice_question?.answer.map((ans, subindex) => 
                                <>
                                {ans.label}
                                </>
                                )} */}
                                {
                                  JSON.parse(
                                    quest.multiple_choice_question?.answer
                                  )[0]["label"]
                                }
                              </FormLabel>
                            </Col>
                          </Row>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </ol>
            ))}
          </ul>

          <Row>
            <Col>
              <FormGroup>
                <div className="text-center">
                  <Button size="lg" onClick={() => _setOpenCallback("list")}>
                    Close
                  </Button>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
