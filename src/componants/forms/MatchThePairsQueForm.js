import { useState, useEffect } from "react";
import ReactSelect, { components } from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Image,
  Button,
  Card,
  Row,
  Col,
  FormLabel,
  FormControl,
  Container,
  FormGroup,
} from "react-bootstrap";

import api from "./APIS";
import Swal from "sweetalert2";
import { Formik } from "formik";
function MatchThePairsQuestionForm(props) {
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

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: "",
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          question5: "",
          question6: "",
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
        // validationSchema={{}}
        onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
          // values.answer = AnswerSelected;
          values.answer = JSON.stringify(AnswerSelected);
          const formData = {
            match_the_pairs_question: {},
            multiple_choice_question: {},
            select_relevent_picture_question: {},
            question_type: typeOfQuestion,
            grade_id: SelectedGrade,
            subject_id: SelectedSubject,
            chapter_id: SelectedChapter,
          };
          if (typeOfQuestion == "objective") {
            formData["multiple_choice_question"] = values;
          }
          api
            .post("/match-pairs-api", formData)
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
                        <option key={chptr.chapter_id} value={chptr.chapter_id}>
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
              <Col md={5}>
                <FormGroup>
                  <FormLabel>question 1</FormLabel>
                  <FormControl
                    type="text"
                    id="question1"
                    name="question1"
                    placeholder="Question1"
                    value={values.question1}
                    onChange={handleChange}
                  ></FormControl>
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>{" "}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>option 1</FormLabel>
                  <FormControl
                    type="text"
                    id="option1"
                    name="option1"
                    placeholder="Option1"
                    value={values.option1}
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
            </Row>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <FormLabel>question 2</FormLabel>
                  <FormControl
                    type="text"
                    id="question2"
                    name="question2"
                    placeholder="Question2"
                    value={values.question2}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>{" "}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>option 2</FormLabel>
                  <FormControl
                    type="text"
                    id="option2"
                    name="option2"
                    placeholder="Option2"
                    value={values.option2}
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
            </Row>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <FormLabel>question 3</FormLabel>
                  <FormControl
                    type="text"
                    id="question3"
                    name="question3"
                    placeholder="Question3"
                    value={values.question3}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>{" "}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>option 3</FormLabel>
                  <FormControl
                    type="text"
                    id="option3"
                    name="option3"
                    placeholder="Question"
                    value={values.option3}
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
            </Row>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <FormLabel>question 4</FormLabel>
                  <FormControl
                    type="text"
                    id="question4"
                    name="question4"
                    placeholder="Question4"
                    value={values.question4}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>{" "}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>option 4</FormLabel>
                  <FormControl
                    type="text"
                    id="option4"
                    name="option4"
                    placeholder="Option4"
                    value={values.option4}
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
            </Row>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <FormLabel>question 5</FormLabel>
                  <FormControl
                    type="text"
                    id="question5"
                    name="question5"
                    placeholder="Question5"
                    value={values.question5}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>{" "}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>option 5</FormLabel>
                  <FormControl
                    type="text"
                    id="option5"
                    name="option5"
                    placeholder="option5"
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
                  </div>{" "}
                  <FormControl />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <FormGroup>
                  <FormLabel>question 6</FormLabel>
                  <FormControl
                    type="text"
                    id="question6"
                    name="question6"
                    placeholder="Question6"
                    value={values.question6}
                    onChange={handleChange}
                  />
                  <div class="form-group mt-3">
                    <input
                      type="file"
                      name="file5"
                      class="form-control-file"
                      id="img5"
                    />
                  </div>{" "}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel>option 6</FormLabel>
                  <FormControl
                    type="text"
                    id="option6"
                    name="option6"
                    placeholder="Option6"
                    value={values.option6}
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
            </Row>
            <Row className="mb-2">
              <Col md={6}>
                <Form.Group as={Col} controlId="my_multiselect_field">
                  <Form.Label>Answer</Form.Label>
                  <ReactSelect
                    name="answer"
                    closeMenuOnSelect={false}
                    hideAnswerSelecteds={false} // Corrected prop name
                    components={{
                      Option,
                    }}
                    allowSelectAll={true}
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
    </div>
  );
}
export default MatchThePairsQuestionForm;
