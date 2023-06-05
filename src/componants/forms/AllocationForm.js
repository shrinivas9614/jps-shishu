/** @format */

import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
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

const schema = Yup.object().shape({});

const AllocationForm = ({ _setOpenCallback }) => {
  console.log("_setOpenCallback===", _setOpenCallback);

  return (
    <div>
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
                      onClick={() => _setOpenCallback("list")}
                    >
                      <i className="fa fa-times" />
                    </Link>
                  </Col>
                </Row>
              </Card.Header>
              <br></br>
              <Card.Body>
                <Formik
                  initialValues={{
                    user: "",
                    grade: "",
                  }}
                  validationSchema={schema}
                  onSubmit={(
                    values,
                    { setStatus, setSubmitting, _setOpenCallback }
                  ) => {}}
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
                      <Form>
                        <Row>
                          <Col md={4}>
                            <FormGroup>
                              <FormLabel>User</FormLabel>
                              <select
                                placeholder="User"
                                name="user"
                                value={values.user}
                                onChange={handleChange}
                                isInvalid={!!errors.user}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <FormLabel>Grades</FormLabel>
                              <select
                                placeholder="grade"
                                name="grade"
                                value={values.grade}
                                onChange={handleChange}
                                isInvalid={!!errors.grade}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
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
        ;
      </div>
    </div>
  );
};

export default AllocationForm;
