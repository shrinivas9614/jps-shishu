import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import * as Yup from "yup";
import api from "./APIS";
import { Formik } from "formik";

const schema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  grade_code: Yup.string().required(),
});

const GradeForm = ({_setOpenCallback}) => {
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
                    onClick={()=>
                    _setOpenCallback("list")
                    }
                  >
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Formik
                initialValues={{
                  grade_code: "",
                  name: "",
                }}
                validationSchema={schema}
                onSubmit={(
                  values,
                  { setStatus, setSubmitting, _setOpenCallback }
                ) => {
                  api
                    .post("/grade-api", values)
                    .then((res) => {
                      console.log("response", res);
                      Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Grade Added successfully!",
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
                  <>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <FormLabel>Name</FormLabel>
                            <FormControl
                              placeholder="Name"
                              name="name"
                              value={values.name}
                              onChange={handleChange}
                              isInvalid={!!errors.name}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <FormLabel>Grade Code</FormLabel>
                            <FormControl
                              placeholder="grade code"
                              name="grade_code"
                              value={values.grade_code}
                              onChange={handleChange}
                              isInvalid={!!errors.grade_code}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Updated Date</Form.Label>
                            <Form.Control name="updateddate" type="date" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={4}>
                          <FormGroup>
                            <FormLabel>created by</FormLabel>
                            <FormControl placeholder="createdby"></FormControl>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <FormLabel>Updated by</FormLabel>
                            <FormControl placeholder="Updatedby"></FormControl>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                      
                      </Row> */}

                      <div className="d-flex justify-content-center mt-3 ">
                        <Button md={2} type="submit">
                          {" "}
                          submit{" "}
                        </Button>
                      </div>
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
};

export default GradeForm;
