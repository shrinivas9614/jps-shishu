import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";
import { answerOptions } from "../utils/Utils";
import Swal from "sweetalert2";
import ReactSelect, { components } from "react-select";
import axios from "axios";

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

export const ReleventPictureForm = ({ props }) => {
  const [AnswerSelected, setAnswerSelected] = useState([]);
  const [questionType, setQuestionType] = useState(props?.mcq ? true : false);
  const [typeOfQuestion, setTypeOfQuestion] = useState(
    props?.mcq
      ? "objective"
      : props?.match
      ? "matching_question"
      : "relevent_picture"
  );

  const handleAnswerSelected = (event) => {
    // console.log("event.target.value::", event.target.value)
    setAnswerSelected(event);
  };

  const [GradeResponse, setGradeResponse] = useState("");
  const [SubjectResponse, setSubjectResponse] = useState("");
  const [ChapterResponse, setChapterResponse] = useState("");

  const [SelectedGrade, setSelectedGrade] = useState(null);
  const [SelectedSubject, setSelectedSubject] = useState(null);
  const [SelectedChapter, setSelectedChapter] = useState(null);

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

  const [selectoption1, setSelectOption1] = useState();
  const [selectoption2, setSelectOption2] = useState();
  const [selectoption3, setSelectOption3] = useState();
  const [selectoption4, setSelectOption4] = useState();
  const [selectoption5, setSelectOption5] = useState();
  const [selectoption6, setSelectOption6] = useState();
  const [questionImage, setQuestionImage] = useState();
  const handleFileInputChange = (event, setter) => {
    const file = event.target.files[0];
    setter(file);
  };

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });

  return (
    <>
      <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Formik
            //   enableReinitialize={true}
            initialValues={{
              question: "",
              option1: "",
              option2: "",
              option3: "",
              option4: "",
              option5: "",
              option6: "",
              option_count: 6,
              mark: "",
              grade_id: SelectedGrade,
              subject_id: SelectedSubject,
              chapter_id: SelectedChapter,
            }}
            //   validationSchema={{}}
            onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
              values.answer = AnswerSelected;
              values.answer = JSON.stringify(AnswerSelected);
              // const form = new FormData();
              // form.set("option1", selectoption1.target.files[0]);
              // form.set("option2", selectoption2.target.files[0]);
              // form.set("option3", selectoption3.target.files[0]);
              // form.set("option4", selectoption4.target.files[0]);
              // form.set("option5", selectoption5.target.files[0]);
              // form.set("option6", selectoption6.target.files[0]);
              // console.log("File 1:", selectoption1.target.files[0]);
              // console.log("File 2:", selectoption2.target.files[0]);
              // Log the remaining files
              // values.option1=selectoption1.target.files[0];
              // values.option2 = selectoption2.target.files[0];
              // values.option3 = selectoption3.target.files[0];
              // values.option4=selectoption4.target.files[0];
              // values.option5 = selectoption5.target.files[0];
              // values.option6 = selectoption6.target.files[0];
              const formData = new FormData();
              formData.append(
                "select_relevent_picture_question.option1",
                selectoption1.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.option2",
                selectoption2.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.option3",
                selectoption3.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.option4",
                selectoption4.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.option5",
                selectoption5.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.option6",
                selectoption6.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.question_image",
                selectoption6.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.question_image",
                questionImage.target.files[0]
              );
              formData.append(
                "select_relevent_picture_question.question",
                values.question
              );
              formData.append(
                "select_relevent_picture_question.mark",
                values.mark
              );
              formData.append("question_type", typeOfQuestion);
              formData.append("grade_id", SelectedGrade);
              formData.append("subject_id", SelectedSubject);
              formData.append("chapter_id", SelectedChapter);
              api
                .post("/question-api", formData)
                .then((res) => {
                  console.log("response", res);
                  Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Objective Question Added successfully!",
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
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel>Grade</FormLabel>
                      <Form.Select
                        name="grade_id"
                        onChange={handleDropdownGradeChange}
                        value={SelectedGrade}
                      >
                        <option>Select Grade</option>
                        {GradeResponse.length > 0 &&
                          GradeResponse.map((grd, index) => (
                            <option key={grd.grade_id} value={grd.grade_id}>
                              {" "}
                              {grd.name}
                            </option>
                          ))}
                      </Form.Select>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FormLabel>Select Subject</FormLabel>
                      <Form.Select
                        name="subject_id"
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        value={SelectedSubject}
                      >
                        <option selected>Select Subject</option>
                        {SubjectResponse.length > 0 &&
                          SubjectResponse.map((sub, index) => (
                            <option value={sub.subject_id}> {sub.name}</option>
                          ))}
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
                <Row>
                  <FormGroup>
                    <Form.Label>Question</Form.Label>
                    <FormControl
                      type="text"
                      id="question"
                      name="question"
                      placeholder="Question"
                      value={values.question}
                      onChange={handleChange}
                    ></FormControl>
                  </FormGroup>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Question image </FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="option1"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setQuestionImage(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>option 1</FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="option1"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setSelectOption1(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>option 2</FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="file5"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setSelectOption2(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>option 3</FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="file5"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setSelectOption3(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>option 4</FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="file5"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setSelectOption4(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>option 5</FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="file5"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setSelectOption5(e)}
                        />
                      </div>{" "}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>option 6</FormLabel>
                      <div class="form-group mt-3">
                        <input
                          type="file"
                          name="file5"
                          class="form-control-file"
                          id="img5"
                          onChange={(e) => setSelectOption6(e)}
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={6}>
                    <Form.Group as={Col} controlId="my_multiselect_field">
                      <Form.Label>Answer</Form.Label>
                      <ReactSelect
                        name="answer"
                        options={answerOptions}
                        closeMenuOnSelect={false}
                        hideAnswerSelecteds={false} // Corrected prop name
                        components={{
                          Option,
                        }}
                        allowSelectAll={true}
                        value={AnswerSelected}
                        onChange={handleAnswerSelected}
                        isMulti
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
        </Card.Body>
      </Card>
    </>
  );
};
