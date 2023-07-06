/** @format */
import React, { useEffect, useState, useCallback } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
  FormLabel,
  FormControl,
} from "react-bootstrap";
// import Adminsidebar from "../Admin/adminSidebard";
import { Link } from "react-router-dom";
import { states, bloodGroups } from "../utils/Utils";
import { Formik } from "formik";
import api from "./APIS";
import * as Yup from "yup";
import Swal from "sweetalert2";
import moment from "moment";

function AssesmentForm({ _setOpenCallback }) {
  const [SelectedTeacher, setSelectedTeacher] = useState(null);
  const [TeacherResponse, setTeacherResponse] = useState("");

  const [GradeResponse, setGradeResponse] = useState("");
  const [SubjectResponse, setSubjectResponse] = useState("");
  const [ChapterResponse, setChapterResponse] = useState("");
  const [SelectedQuestionResponse, setSelectedQuestionResponse] =
    useState(null);

  const [SelectedGrade, setSelectedGrade] = useState(null);
  const [SelectedSubject, setSelectedSubject] = useState(null);
  const [SelectedChapter, setSelectedChapter] = useState(null);
  const [SelectedQuestionType, setSelectedQuestionType] = useState(null);
  const [SelectedQuestions, setSelectedQuestions] = useState([]);

  const [getSelectQuestion, setGetSelectQuestion] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);
  const [TotalMarks, setTotalMarks] = useState(0);
  const [SubjectName, setSubjectName] = useState("");

  console.log("select ", selectedIds);

  // Select Teacher
  const getTeacher = () => {
    api
      .get("/teacher-list")
      .then((res) => {
        console.log("teacher response", res);
        setTeacherResponse(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getTeacher();
  }, []);

  useEffect(() => {}, [TotalMarks]);

  const handleDropdownTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  // Select Grade
  const getGrades = () => {
    api
      .get("/grade-api")
      .then((res) => {
        console.log("Grade response", res, "grade_id:", res.data.grade_id);
        setGradeResponse(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getGrades();
  }, []);

  const handleDropdownGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  // Select Subject
  const getSubjects = (grade_id) => {
    api
      .get(`/subject-list/${grade_id}/`)

      .then((res) => {
        console.log(
          "Subject response",
          res.data,
          "SelectedGrade",
          SelectedGrade
        );
        setSubjectResponse(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (SelectedGrade) {
      getSubjects(SelectedGrade);
    }
  }, [SelectedGrade]);

  const handleDropdownSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // Select Chapter
  const getChapters = (subject_id) => {
    api
      .get(`/chapter-list/${subject_id}/`)

      .then((response) => {
        console.log(
          "Chapter response",
          response.data,
          "SelectedSubject",
          SelectedSubject
        );
        setChapterResponse(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (SelectedSubject) {
      getChapters(SelectedSubject);
    }
  }, [SelectedSubject]);

  const handleDropdownChapterChange = (event) => {
    setSelectedChapter(event.target.value);
  };

  // Select Chapter
  // http://localhost:8000/question-list?question_type=objective&chapter_id=1
  const getQuestions = () => {
    api
      .get(
        `/question-list?question_type=${SelectedQuestionType}&chapter_id=${SelectedChapter}`
      )
      .then((response) => {
        console.log(
          "question response",
          response.data,
          "SelectedQuestionType",
          SelectedQuestionType
        );
        setSelectedQuestions(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  console.log("SelectedQuestionType", SelectedQuestionType);
  useEffect(() => {
    if (SelectedQuestionType && SelectedChapter) {
      getQuestions();
    }
  }, [SelectedQuestionType, SelectedChapter]);

  const QuestionTypeChange = (event) => {
    setSelectedQuestionType(event.target.value);
  };

  const handleMarks = (value) => {
    console.log("values:", value);
    if (selectedIds.includes(value.question_id)) {
      setSelectedIds(selectedIds.filter((id) => id !== value.question_id));
    } else {
      setSelectedIds([...selectedIds, value.question_id]);
    }
    var mrks = 0;
    for (const iterator of SelectedQuestions) {
      if (SelectedQuestionType == "objective") {
        if (selectedIds.includes(iterator.multiple_choice_question.id)) {
          mrks = mrks + iterator.multiple_choice_question.mark;
        }
      } else {
        if (
          selectedIds.includes(iterator.select_relevent_picture_question.id)
        ) {
          mrks = mrks + iterator.select_relevent_picture_question.mark;
        }
      }
    }
    setTotalMarks(mrks);
  };

  const Subname = (value) => {
    console.log("values:", value.target.value);
    for (const iterator of SubjectResponse) {
      console.log("iterator", iterator);
      if (parseInt(iterator.subject_id) === parseInt(value.target.value)) {
        console.log("subject_id: ", iterator.subject_id);
        setSubjectName(iterator.name);
        setSelectedSubject(value.target.value);
        break;
      }
    }
  };

  return (
    <div>
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
                    className="float-end text-danger"
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
              <Formik
                // enableReinitialize={true}
                initialValues={{
                  title: "",
                  date: new Date(),
                  start_time: "",
                  end_time: "",
                  subject: "",
                  marks: "",
                  question_type: "",
                  teacher_name: "",
                  grade_id: "",
                  subject_id: "",
                  chapter_id: "",
                  test_duration: "",
                  test_type: "",
                  teacher_id: "",
                  test_category: "",
                  int_ext_type: "",
                }}
                // validationSchema={schema}
                onSubmit={(values, { setStatus, setSubmitting }) => {
                  values.name = values.title;
                  // values.test_type = "online";
                  values.subject = SelectedSubject;
                  values.test_category = null;
                  values.int_ext_type = null;
                  values.grade_id = SelectedGrade;
                  values.standard = SelectedGrade;
                  values.subject_id = SelectedSubject;
                  values.chapter_id = SelectedChapter;
                  values.teacher_id = SelectedTeacher;
                  values.questions = selectedIds;
                  // values.marks = 10;
                  // var time = new Date();
                  // values.date = new Date();
                  // values.start_time = time;
                  // values.end_time = time;
                  // values.test_duration = 30;
                  for (const iterator of SubjectResponse) {
                    console.log("iterator", iterator);
                    if (
                      parseInt(iterator.subject_id) ===
                      parseInt(SelectedSubject)
                    ) {
                      console.log("subject_id: ", iterator.subject_id);
                      values.subject = iterator.name;
                      break;
                    }
                  }
                  console.log("values:- ", values);

                  api
                    .post("/assessment-api", values)
                    .then((response) => {
                      console.log("assessment response", response);
                      Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Assessment Created Successfully!",
                      }).then(() => {});
                      // _setOpenCallback("list");
                    })
                    .catch((error) => {
                      console.log("Error", error);
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
                  <>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col>
                          <FormGroup>
                            <FormLabel>Assessment Name</FormLabel>
                            <FormControl
                              name="title"
                              placeholder="Assessment Name"
                              value={values.title}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Teacher Name</FormLabel>
                            <Form.Select
                              name="teacher_name"
                              onChange={(e) =>
                                setSelectedTeacher(e.target.value)
                              }
                              value={SelectedTeacher}
                            >
                              <option selected>Select Teacher</option>
                              {TeacherResponse.length > 0 &&
                                TeacherResponse.map((tea, index) => (
                                  <option value={tea.id}>
                                    {" "}
                                    {tea.firstname} {tea.lastname}
                                  </option>
                                ))}
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Date of Assessment</FormLabel>
                            <FormControl
                              type="date"
                              placeholder="Date of Assessment"
                              name="date"
                              value={values.date}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <FormGroup>
                            <FormLabel>Grade</FormLabel>
                            <Form.Select
                              name="grade_id"
                              onChange={(e) => setSelectedGrade(e.target.value)}
                              value={SelectedGrade}
                              // type="number"
                            >
                              <option>Select Grade</option>
                              {GradeResponse.length > 0 &&
                                GradeResponse.map((grd, index) => (
                                  <option
                                    key={grd.grade_id}
                                    value={grd.grade_id}
                                  >
                                    {" "}
                                    {grd.name}
                                  </option>
                                ))}
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Subject</FormLabel>
                            <Form.Select
                              name="subject_id"
                              onChange={(e) =>
                                setSelectedSubject(e.target.value)
                              }
                              // onChange={(e) =>
                              //   {Subname(e)}
                              // }
                              value={SelectedSubject}
                            >
                              <option selected>Select Subject</option>
                              {SubjectResponse.length > 0 &&
                                SubjectResponse.map((sub, index) => (
                                  <option value={sub.subject_id}>
                                    {" "}
                                    {sub.name}
                                  </option>
                                ))}
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Chapter</FormLabel>
                            <Form.Select
                              name="chapter_id"
                              onChange={handleDropdownChapterChange}
                              value={SelectedChapter}
                            >
                              <option selected>Select Chapter</option>
                              {ChapterResponse.length > 0 &&
                                ChapterResponse.map((chptr, index) => (
                                  <option
                                    key={chptr.chapter_id}
                                    value={chptr.chapter_id}
                                  >
                                    {" "}
                                    {chptr.name}
                                  </option>
                                ))}
                            </Form.Select>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <FormGroup>
                            <FormLabel>Test Type</FormLabel>
                            <Form.Select
                              placeholder="test_type"
                              name="test_type"
                              value={values.test_type}
                              // onClick={QuestionTypeChange}
                              onChange={handleChange}
                            >
                              <option>Select Test Type</option>
                              <option value="Online">Online</option>
                              <option value="Offline">Offline</option>
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Start Time</FormLabel>
                            <FormControl
                              type="time"
                              placeholder="Start Time"
                              name="start_time"
                              value={values.start_time}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>End Time</FormLabel>
                            <FormControl
                              type="time"
                              placeholder="End Time"
                              name="end_time"
                              value={values.end_time}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <FormGroup>
                            <FormLabel>Types of Questions</FormLabel>
                            <Form.Select
                              placeholder="Types of Questions"
                              name="question_type"
                              value={values.question_type}
                              onClick={QuestionTypeChange}
                              onChange={handleChange}
                            >
                              <option>Select Question Type</option>
                              <option value="matching_question">
                                Match the Pairs
                              </option>
                              <option value="relevent_picture">
                                Relevent Picture
                              </option>
                              <option value="objective">Objective</option>
                            </Form.Select>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Total Marks</FormLabel>
                            <Form.Control
                              type="number"
                              // step={0.1}
                              id="marks"
                              name="marks"
                              placeholder="Total Marks"
                              value={values.marks}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Test Duration</FormLabel>
                            <Form.Control
                              type="number"
                              // step={0.1}
                              id="test_duration"
                              name="test_duration"
                              placeholder="Test Duration"
                              value={values.test_duration}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <FormGroup>
                            <FormLabel>No.of Selected Questions</FormLabel>
                            <Form.Control
                              type="number"
                              // step={0.1}
                              id="questions"
                              name="questions"
                              placeholder="Selected Questions"
                              value={selectedIds.length}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <div className="text-center mt-4">
                              <Button
                                onClick={getQuestions}
                                variant="primary"
                                size="lg"
                                disabled={
                                  !SelectedQuestionType || !SelectedChapter
                                }
                              >
                                Get Q's
                              </Button>
                            </div>
                          </FormGroup>
                        </Col>
                        <Col></Col>
                      </Row>

                      {SelectedQuestionType == "objective" &&
                        SelectedQuestions.length > 0 && (
                          <div className="mt-4">
                            <Row>
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
                                    <div
                                      className="row"
                                      style={{ marginRight: "20px" }}
                                    >
                                      <div
                                        className="col-lg-10 que_option"
                                        style={{ fontSize: "19px" }}
                                      >
                                        <Form.Check
                                          id={
                                            quest?.multiple_choice_question?.id
                                          }
                                          type="checkbox"
                                          label={`Q ${index + 1}. ${
                                            quest?.multiple_choice_question
                                              ?.question
                                          }`}
                                          onChange={() => {
                                            handleMarks(quest);
                                          }}
                                          checked={selectedIds.includes(
                                            quest?.multiple_choice_question?.id
                                          )}
                                          value={
                                            quest?.multiple_choice_question
                                              ?.question
                                          }
                                        />
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
                                            value={
                                              quest?.multiple_choice_question
                                                ?.mark
                                            }
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
                                        <span
                                          className="que_option radio_check"
                                          style={{ fontSize: "19px" }}
                                        >
                                          <span>
                                            <input type="radio" disabled />
                                            <label
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <p>
                                                {
                                                  quest
                                                    ?.multiple_choice_question
                                                    ?.option1
                                                }
                                              </p>
                                            </label>
                                          </span>
                                        </span>
                                        <span
                                          className="que_option radio_check"
                                          style={{ fontSize: "19px" }}
                                        >
                                          <span>
                                            <input type="radio" disabled />
                                            <label
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <p>
                                                {
                                                  quest
                                                    ?.multiple_choice_question
                                                    ?.option2
                                                }
                                              </p>
                                            </label>
                                          </span>
                                        </span>
                                        <span
                                          className="que_option radio_check"
                                          style={{ fontSize: "19px" }}
                                        >
                                          <span>
                                            <input type="radio" disabled />
                                            <label
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <p>
                                                {
                                                  quest
                                                    ?.multiple_choice_question
                                                    ?.option3
                                                }
                                              </p>
                                            </label>
                                          </span>
                                        </span>
                                        <span
                                          className="que_option"
                                          style={{ fontSize: "19px" }}
                                        >
                                          <span>
                                            <input type="radio" disabled />
                                            <label
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <p>
                                                {
                                                  quest
                                                    ?.multiple_choice_question
                                                    ?.option4
                                                }
                                              </p>
                                            </label>
                                          </span>
                                        </span>
                                        <span
                                          className="que_option"
                                          style={{ fontSize: "19px" }}
                                        >
                                          <span>
                                            <input type="radio" disabled />
                                            <label
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <p>
                                                {
                                                  quest
                                                    ?.multiple_choice_question
                                                    ?.option5
                                                }
                                              </p>
                                            </label>
                                          </span>
                                        </span>
                                        <span
                                          className="que_option"
                                          style={{ fontSize: "19px" }}
                                        >
                                          <span>
                                            <input type="radio" disabled />
                                            <label
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <p>
                                                {
                                                  quest
                                                    ?.multiple_choice_question
                                                    ?.option6
                                                }
                                              </p>
                                            </label>
                                          </span>
                                        </span>
                                        <span className="que_option">
                                          <span>
                                            <Row className="md-3">
                                              <Col>
                                                <FormLabel>
                                                  Chapter:-{" "}
                                                  {quest?.chapter_id?.name}
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
                                    <Button
                                      // onClick={getQuestions}
                                      variant="primary"
                                      size="lg"
                                      type="submit"
                                      // disabled={
                                      //   !SelectedQuestionType || !SelectedChapter
                                      // }
                                    >
                                      Create Assesment
                                    </Button>
                                  </div>
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        )}
                      {SelectedQuestionType == "relevent_picture" && (
                        <div className="mt-4">
                          <Row>
                            <h4>Relevent Picture Questions</h4>
                          </Row>
                          <ul style={{ marginRight: "40px" }}>
                            {SelectedQuestions.map((quest, index) => (
                              <ol key={quest.id}>
                                <div
                                  className="row ques_div"
                                  id="assess_test_row"
                                  style={{ fontSize: "19px" }}
                                >
                                  <div
                                    className="row"
                                    style={{ marginRight: "20px" }}
                                  >
                                    <div
                                      className="col-lg-10 que_option"
                                      style={{ fontSize: "19px" }}
                                    >
                                      <Form.Check
                                        id={quest?.question_id}
                                        type="checkbox"
                                        label={`Q ${index + 1}. ${
                                          quest
                                            ?.select_relevent_picture_question
                                            ?.question
                                        }`}
                                        onChange={() => {
                                          handleMarks(quest);
                                        }}
                                        checked={selectedIds.includes(
                                          quest?.question_id
                                        )}
                                        value={
                                          quest
                                            ?.select_relevent_picture_question
                                            ?.question
                                        }
                                      />
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
                                          value={
                                            quest
                                              ?.select_relevent_picture_question
                                              ?.mark
                                          }
                                          style={{ paddingRight: "0px" }}
                                          disabled
                                        />
                                      </span>
                                    </div>
                                    <div className="col-lg-1">
                                      <span className="que_tag">marks</span>
                                    </div>
                                  </div>
                                  {/* images show */}
                                  {/* <div className="row">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-11">
                                      <span
                                        className="que_option radio_check"
                                        style={{ fontSize: "19px" }}
                                      >
                                        <span>
                                          <input type="radio" disabled />
                                          <Row>
                                            <Col lg={6}>
                                              <div
                                                key={index}
                                                className="square bg-secondary rounded-circle text-center"
                                                style={{
                                                  width: "180px",
                                                  height: "180px",
                                                  margin: "10px",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    quest
                                                      ?.select_relevent_picture_question
                                                      ?.option1
                                                  }
                                                  alt=""
                                                  style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    paddingTop: "5px",
                                                  }}
                                                />
                                              </div>
                                            </Col>
                                            <Col lg={6}>
                                              <div
                                                key={index}
                                                className="square bg-secondary rounded-circle text-center"
                                                style={{
                                                  width: "180px",
                                                  height: "180px",
                                                  margin: "10px",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    quest
                                                      ?.select_relevent_picture_question
                                                      ?.option2
                                                  }
                                                  alt=""
                                                  style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    paddingTop: "5px",
                                                  }}
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row className="mb-2">
                                            <Col lg={6}>
                                              <div
                                                key={index}
                                                className="square bg-secondary rounded-circle text-center"
                                                style={{
                                                  width: "180px",
                                                  height: "180px",
                                                  margin: "10px",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    quest
                                                      ?.select_relevent_picture_question
                                                      ?.option3
                                                  }
                                                  alt=""
                                                  style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    paddingTop: "5px",
                                                  }}
                                                />
                                              </div>
                                            </Col>
                                            <Col lg={6}>
                                              <div
                                                key={index}
                                                className="square bg-secondary rounded-circle text-center"
                                                style={{
                                                  width: "180px",
                                                  height: "180px",
                                                  margin: "10px",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    quest
                                                      ?.select_relevent_picture_question
                                                      ?.option4
                                                  }
                                                  alt=""
                                                  style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    paddingTop: "5px",
                                                  }}
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row className="mb-2">
                                            <Col lg={6}>
                                              <div
                                                key={index}
                                                className="square bg-secondary rounded-circle text-center"
                                                style={{
                                                  width: "180px",
                                                  height: "180px",
                                                  margin: "10px",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    quest
                                                      ?.select_relevent_picture_question
                                                      ?.option
                                                  }
                                                  alt=""
                                                  style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    paddingTop: "5px",
                                                  }}
                                                />
                                              </div>
                                            </Col>
                                            <Col lg={6}>
                                              <div
                                                key={index}
                                                className="square bg-secondary rounded-circle text-center"
                                                style={{
                                                  width: "180px",
                                                  height: "180px",
                                                  margin: "10px",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    quest
                                                      ?.select_relevent_picture_question
                                                      ?.option6
                                                  }
                                                  alt=""
                                                  style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    paddingTop: "5px",
                                                  }}
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                        </span>
                                      </span>

                                      <span className="que_option">
                                        <span>
                                          <Row className="md-3">
                                            <Col>
                                              <FormLabel>
                                                Chapter:-{" "}
                                                {quest?.chapter_id?.name}
                                              </FormLabel>
                                            </Col>
                                          </Row>
                                        </span>
                                      </span>
                                    </div>
                                  </div> */}
                                </div>
                              </ol>
                            ))}
                          </ul>

                          <Row>
                            <Col>
                              <FormGroup>
                                <div className="text-center">
                                  <Button
                                    // onClick={getQuestions}
                                    variant="primary"
                                    size="lg"
                                    type="submit"
                                    // disabled={
                                    //   !SelectedQuestionType || !SelectedChapter
                                    // }
                                  >
                                    Create Assesment
                                  </Button>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                      )}
                    </Form>
                  </>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default AssesmentForm;
