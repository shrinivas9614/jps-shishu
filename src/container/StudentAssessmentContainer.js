import React, { useCallback, useState, useEffect } from "react";
import {
  Card,
  Nav,
  Tab,
  Row,
  Col,
  Button,
  Form,
  Table,
  FormLabel,
} from "react-bootstrap";
import Assesment from "../componants/Admin/Assesment";
import Adminsidebar from "../componants/Admin/adminSidebard";
import { QuestionConatiner } from "./questionContainer";
import Circle from "../componants/student/Questions/circle";
import Ques from "../componants/student/Questions/ques";
import api from "../componants/forms/APIS";
import moment from "moment";

export const StudentContainer = () => {
  const [show, setShow] = useState("assement");
  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });
  const shows = () => {
    // eslint-disable-next-line default-case
    switch (show) {
      case "assement":
        return <Circle />;
      case "question":
        return <Ques />;
    }
  };

  const [view, setView] = useState([]);

  const getAssessment = () => {
    api
      .get(`student/assessment/?grade_id=${2}`)
      .then((response) => {
        console.log("response data", response.data);
        setView(response.data);
      })
      .catch((error) => {
        console.error(error); // handle any errors
      });
  };
  useEffect(() => {
    getAssessment();
  }, []);

  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  function numberSerires(j) {
    if (j == 1) {
      return "१";
    }
    if (j == 2) {
      return "२";
    }
    if (j == 3) {
      return "३";
    }
    if (j == 4) {
      return "४";
    }
    if ((j = 5)) {
      return "५";
    }
    if ((j = 6)) {
      return "६";
    }
  }

  const [testStart, setTestStart] = useState(false);
  const [testList, setTestList] = useState([]);
  const [questionType, setQuestionType] = useState();
  const [assessment, setAssessmentName] = useState();
  console.log("testlist", testList);
  return (
    <>
      <div
        className="content-wrapper-client-lead"
        style={{ minHeight: " 1043px" }}
      >
        <Card>
          <Card.Header className="m-3 text-center title_label table-header">
            {testStart ? assessment : "Assessment"}
          </Card.Header>
       
          <Card.Body>
            {testStart == true && (
              <Button
                className="pull-right"
                onClick={() => setTestStart(false)}
              >
                <i className="fa fa-times"></i>
              </Button>
            )}
            {testStart ? (
              questionType == "objective" ? (
                <>
                  {testList.length > 0 &&
                    testList.map((test, index) => (
                      <>
                        {test?.multiple_choice_question && (
                          <>
                            <Card.Title className="p-3 ">
                              <Row>
                                <Col lg={8}>
                                  {" "}
                                  प्रश्न {numberSerires(index + 1)}.{" "}
                                  {test?.multiple_choice_question?.question}
                                </Col>
                              </Row>
                            </Card.Title>
                          </>
                        )}

                        <Row className="d-flex m-2 p-2 bg-white rounded">
                          <Col>
                            <Form className="p-5 mx-5">
                              <Form.Check type="radio" id="option">
                                <Form.Check />
                                <Form.Check.Label className=" mx-5 text-center">
                                  {test?.multiple_choice_question?.option1}
                                </Form.Check.Label>
                              </Form.Check>
                              <Form.Check type="radio" id="option">
                                <Form.Check />
                                <Form.Check.Label className=" mx-5 text-center">
                                  {test?.multiple_choice_question?.option2}
                                </Form.Check.Label>
                              </Form.Check>
                              <Form.Check type="radio" id="option">
                                <Form.Check />
                                <Form.Check.Label className=" mx-5 text-center">
                                  {test?.multiple_choice_question?.option3}
                                </Form.Check.Label>
                              </Form.Check>
                              <Form.Check type="radio" id="option">
                                <Form.Check />
                                <Form.Check.Label className=" mx-5 text-center">
                                  {test?.multiple_choice_question?.option4}
                                </Form.Check.Label>
                              </Form.Check>
                              <Form.Check type="radio" id="option">
                                <Form.Check />{" "}
                                <Form.Check.Label className=" mx-5 text-center">
                                  {test?.multiple_choice_question?.option5}
                                </Form.Check.Label>
                              </Form.Check>
                              <Form.Check type="radio" id="option">
                                <Form.Check />
                                <Form.Check.Label className=" mx-5 text-center">
                                  {test?.multiple_choice_question?.option6}
                                </Form.Check.Label>
                              </Form.Check>
                            </Form>
                          </Col>
                        </Row>
                      </>
                    ))}

                  <div className="text-center">
                    <Button className="m-sm-auto">Submit</Button>
                  </div>
                </>
              ) : (
                <>
                  {testList.length > 0 &&
                    testList.map((quest, index) => (
                      <>
                        <Row>
                          <Col lg={8}>
                            {" "}
                            प्रश्न {numberSerires(index + 1)}.{" "}
                            {quest?.select_relevent_picture_question?.question}
                          </Col>
                        </Row>
                        <div className="row">
                          <div className="col-lg-1"></div>
                          <div className="col-lg-11">
                            <span
                              className="que_option radio_check"
                              style={{ fontSize: "19px" }}
                            >
                              <Row>
                                <Col lg={3}>
                                  <div
                                    key={index}
                                    className="square bg-secondary rounded-circle text-center"
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      margin: "20px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src={
                                        quest?.select_relevent_picture_question
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
                                <Col lg={3}>
                                  <div
                                    key={index}
                                    className="square bg-secondary rounded-circle text-center"
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      margin: "20px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src={
                                        quest?.select_relevent_picture_question
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
                                <Col lg={3}>
                                  <div
                                    key={index}
                                    className="square bg-secondary rounded-circle text-center"
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      margin: "20px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src={
                                        quest?.select_relevent_picture_question
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
                              </Row>
                              <div className="text-center">
                                <div
                                  key={index}
                                  className="square bg-secondary rounded-circle text-center"
                                  style={{
                                    width: "180px",
                                    height: "180px",
                                    margin: "10px",
                                    cursor: "pointer",
                                    display: "inline-block", // Add this line to align the square elements horizontally
                                  }}
                                >
                                  <img
                                    src={
                                      quest?.select_relevent_picture_question
                                        ?.question_image
                                    }
                                    alt=""
                                    style={{
                                      width: "150px",
                                      height: "150px",
                                      paddingTop: "5px",
                                      margin: "auto", // Add this line to center the image horizontally
                                    }}
                                  />
                                </div>
                              </div>

                              <Row className="mb-2">
                                <Col lg={3}>
                                  <div
                                    key={index}
                                    className="square bg-secondary rounded-circle text-center"
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      margin: "20px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src={
                                        quest?.select_relevent_picture_question
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
                                <Col lg={3}>
                                  <div
                                    key={index}
                                    className="square bg-secondary rounded-circle text-center"
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      margin: "20px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src={
                                        quest?.select_relevent_picture_question
                                          ?.option5
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
                                <Col lg={3}>
                                  <div
                                    key={index}
                                    className="square bg-secondary rounded-circle text-center"
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      margin: "20px",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <img
                                      src={
                                        quest?.select_relevent_picture_question
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

                            <span className="que_option">
                              <span>
                                <Row className="md-3">
                                  <Col>
                                    <FormLabel>
                                      Chapter:- {quest?.chapter_id?.name}
                                    </FormLabel>
                                  </Col>
                                </Row>
                              </span>
                            </span>
                          </div>
                        </div>
                      </>
                    ))}
                  <div className="text-center">
                    <Button className="m-sm-auto">Submit</Button>
                  </div>
                </>
              )
            ) : (
              <>
                <Table className="text-center">
                  <thead>
                    <tr>
<<<<<<< HEAD
                      <th>#</th>
                      <th>Tittle</th>
                      <th>Assessment type</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Duration</th>
                      <th>Action</th>
=======
                      <th className="table-header">#</th>
                      <th className="table-header">Assessment</th>
                      <th className="table-header">Test Category</th>
                      <th className="table-header">Test Duration</th>
                      <th className="table-header">Test</th>
>>>>>>> deepa_jps
                    </tr>
                  </thead>
                  <tbody>
                    {view.length > 0 &&
                      view.map((test, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{test.name}</td>
<<<<<<< HEAD
                          <td>{test.question_type}</td>
                          <td>{moment(test.date).format("DD-MM-YYYY")}</td>
                          <td>{test.start_time}</td>
                          <td>{test.test_duration}</td>
=======
                          <th>{test.question_type}</th>
                          <td>{test.test_duration} hr</td>
>>>>>>> deepa_jps
                          <th>
                            <Button
                              onClick={() => {
                                setTestStart(true);
                                setTestList(test?.questions);
                                setQuestionType(test?.question_type);
                                setAssessmentName(test?.name);
                              }}
                            >
                              Start
                            </Button>
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card.Body>

          {/* <Card.Header>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    _setOpenCallback("assement");
                  }}
                >
                  Assesment
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    _setOpenCallback("question");
                  }}
                >
                  Question
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>{shows()}</Card.Body> */}
        </Card>
      </div>
    </>
  );
};
