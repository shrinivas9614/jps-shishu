/** @format */
import React, { useEffect, useState } from "react";
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
        setSelectedQuestions(response.data.map((quest) => ({ id: quest.question_id, text: quest.question, multiple_choice_question: quest.multiple_choice_question })));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    if (SelectedQuestionType && SelectedChapter) {
      // getQuestions();
    }
  }, [SelectedQuestionType, SelectedChapter]);



  const QuestionTypeChange = (event) => {
    setSelectedQuestionType(event.target.value);
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
                    className="float-end fs-2 text-danger"
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
                  name: "",
                  date_time: "",
                  subject: "",
                  marks: "",
                  question_type: "",
                  teacher_name: "",
                  grade_id: "",
                  subject_id: "",
                  chapter_id: "",
                }}
                // validationSchema={schema}
                onSubmit={(values, { setStatus, setSubmitting }) => {
                  values.grade_id = SelectedGrade;
                  values.subject = SelectedSubject;
                  values.chapter_id = SelectedChapter;
                  values.teacher_name = SelectedTeacher;
                  console.log("values:- ", values);

                  api
                    .post("/assessment-api", values)
                    .then((response) => {
                      console.log("response", response);
                      Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Assessment Created Successfully!",
                      }).then(() => { });
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
                              name="name"
                              placeholder="Assessment Name"
                              value={values.name}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <FormLabel>Teacher Name</FormLabel>
                            {/* <FormControl
                              placeholder="Teacher Name"
                              name="teacher_name"
                              value={values.teacher_name}
                              onChange={handleChange}
                            /> */}

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
                                  <option value={tea.teacher_name}>
                                    {" "}
                                    {tea.firstname}
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
                              name="date_time"
                              value={values.date_time}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <FormGroup>
                            <FormLabel>Grade</FormLabel>
                            <Form.Select
                              name="grade_id"
                              onChange={(e) => setSelectedGrade(e.target.value)}
                              value={SelectedGrade}
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
                      <Row>
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
                      </Row>
                    </Form>
                  </>
                )}
              </Formik>
            </Card.Body>
          </Card>
          {SelectedQuestions.length > 0 && (
            <div className="mt-4">
              <h4>Selected Questions:</h4>
              <ul style={{ marginRight: "40px" }}>
                {SelectedQuestions.map((quest) => (
                  <ol key={quest.id}>
                    {/* <li>{quest.multiple_choice_question?.question}</li> */}
                    <div className="row ques_div" id="assess_test_row" style={{ fontSize: "19px" }}>
                      <div className="row" style={{ marginRight: "20px" }}>
                        <div className="col-lg-10">
                          <input id='{"question_id":797,"question_level":"EASY"}' className="test_type_chkbox quest_type_chkbox" type="checkbox" />
                          &nbsp;&nbsp;
                          <span className="oval" style={{ backgroundColor: "rgb(20, 221, 94)", marginTop: "5px", }}></span>
                          <span className="que_tag">
                            <span>&nbsp;&nbsp;{quest.multiple_choice_question?.id}.&nbsp;</span>
                            <span> {quest.multiple_choice_question?.question} </span>
                          </span>
                        </div>
                        <div className="col-lg-1">
                          <span>
                            <input
                              id="weight797" type="number" placeholder="Marks" className="form-control" value={quest.multiple_choice_question?.mark} style={{ paddingRight: "0px" }} />
                          </span>
                        </div>
                        <div className="col-lg-1">
                          <span className="que_tag">marks</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                          <span className="que_option radio_check" style={{ fontSize: "19px" }}>
                            {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                            <span>
                              <input
                                type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                              // style={{ paddingLeft: "10px" }}
                              />
                              <label style={{ paddingLeft: "20px" }}>
                                <p>{quest.multiple_choice_question?.option1}</p>
                              </label>
                            </span>
                          </span>
                          <span className="que_option radio_check" style={{ fontSize: "19px" }}>
                            {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                            <span>
                              <input
                                type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                              // style={{ paddingLeft: "10px" }}
                              />
                              <label style={{ paddingLeft: "20px" }}>
                                <p>{quest.multiple_choice_question?.option2}</p>
                              </label>
                            </span>
                          </span>
                          <span className="que_option radio_check" style={{ fontSize: "19px" }}>
                            {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                            <span>
                              <input
                                type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                              // style={{ paddingLeft: "10px" }}
                              />
                              <label style={{ paddingLeft: "20px" }}>
                                <p>{quest.multiple_choice_question?.option3}</p>
                              </label>
                            </span>
                          </span>
                          <span className="que_option" style={{ fontSize: "19px" }}>
                            {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                            <span>
                              <input
                                type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                              // style={{ paddingLeft: "10px" }}
                              />
                              <label style={{ paddingLeft: "20px" }}>
                                <p>{quest.multiple_choice_question?.option4}</p>
                              </label>
                            </span>
                          </span>
                          <span className="que_option" style={{ fontSize: "19px" }}>
                            {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                            <span>
                              <input
                                type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                              // style={{ paddingLeft: "10px" }}
                              />
                              <label style={{ paddingLeft: "20px" }}>
                                <p>{quest.multiple_choice_question?.option5}</p>
                              </label>
                            </span>
                          </span>
                          <span className="que_option" style={{ fontSize: "19px" }}>
                            {/* <span>&nbsp;&nbsp;&nbsp;</span> */}
                            <span>
                              <input
                                type="radio"
                              // value="a"
                              // checked={selectedOption === "a"}
                              // onChange={handleOptionChange}
                              // style={{ paddingLeft: "10px" }}
                              />
                              <label style={{ paddingLeft: "20px" }}>
                                <p>{quest.multiple_choice_question?.option6}</p>
                              </label>
                            </span>
                          </span>
                          {/* <div>
                        <span style={{ color: "rgb(0, 0, 0)" }}>Chapter :</span>
                        <span>Integration of Positive integers</span>
                        <span style={{ color: "rgb(0, 0, 0)" }}>,Topic :</span>
                        <span>Positive integers</span>
                      </div> */}
                        </div>
                      </div>
                    </div>
                    {/* <li>{quest.multiple_choice_question?.option1}</li>
                    <li>{quest.multiple_choice_question?.option2}</li>
                    <li>{quest.multiple_choice_question?.option3}</li>
                    <li>{quest.multiple_choice_question?.option4}</li>
                    <li>{quest.multiple_choice_question?.option5}</li>
                    <li>{quest.multiple_choice_question?.option6}</li><br /> */}
                  </ol>
                ))}
              </ul>

              <div className="text-center mt-4">
                <Button
                  onClick={getQuestions}
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={
                    !SelectedQuestionType || !SelectedChapter
                  }
                >
                  Create Assessment
                </Button>
              </div>
              
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default AssesmentForm;