import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
import { states } from "../utils/Utils";
import { Formik } from "formik";
import api from "../forms/APIS";
import { Link } from "react-router-dom";
import moment from "moment";

function EditStudentPorfile_new({ _setOpenCallback, id, setEdit }) {
  // const [selectedState, setSelectedState] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  const [view, setView] = useState();
  const [show, setShow] = useState(false);

  const getStudentinfo_new = () => {
    api
      .get("/student-detail/" + id + "/")
      .then((response) => {
        setView(response.data);
        console.log("get edit getStudentinfo_new", response.data);
        console.log(
          "new Date(view?.date_of_birth): ",
          new Date(response.data?.date_of_birth)
        );
        setShow(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log("view", view, "id", id);
  useEffect(() => {
    getStudentinfo_new();
    // setSelectedCity("");
  }, []);

  return (
    <>
      <Helmet>
        <title>Edit Student Profile | JPS</title>
      </Helmet>

      {show && (
        <Card>
          <Card.Body>
            <Formik
              initialValues={{
                aadhar_number: view?.aadhar_number,
                firstname: view?.firstname,
                middlename: view?.middlename,
                lastname: view?.lastname,
                email: view?.email,
                phone: view?.phone,
                address_line_1: view?.address_line_1,
                country: view?.country,
                state: view?.state,
                city: view?.city,
                pincode: view?.pincode,
                date_of_birth: `${
                  new Date(view.date_of_birth).toISOString().split("T")[0]
                }`,
                gender: view?.gender,
                date_of_admission: `${
                  new Date(view.date_of_admission).toISOString().split("T")[0]
                }`,
                age: view?.age,
                height: view?.height,
                weight: view?.weight,
                blood_group: view?.blood_group,
                grade_id: view?.grade_id,
                user_id: view?.user_id,
                cast_category: view?.cast_category,
                religion: view?.religion,
                // marital_status: view?.marital_status,
                // mobile: view?.mobile,
                // pan_number: view?.pan_number,
                // spause_name: view?.spause_name,
              }}
              onSubmit={(values, { setStatus, setSubmitting }) => {
                // values.state = selectedState ? selectedState : "";
                // values.city = selectedCity ? selectedCity : "";
                api
                  .put(`/student-detail/${id}/`, values)
                  .then((response) => {
                    console.log("Edit response Data: ", response.data);
                    setEdit(false);
                    alert("Profile Data Updated Successfully!");
                  })
                  .catch((error) => {
                    console.log("Error", error);
                    alert("Profile Data Not Updated!");
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
                        <Form.Group>
                          <Form.Label>Aadhar number</Form.Label>
                          <Form.Control
                            name="aadhar_number"
                            value={values.aadhar_number}
                            onChange={handleChange}
                            placeholder="Aadhar Number"
                            type="text"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            placeholder="First Name"
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Middle Name</Form.Label>
                          <Form.Control
                            placeholder="Middle Name"
                            name="middlename"
                            value={values.middlename}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            placeholder="Last Name"
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Email ID</Form.Label>
                          <Form.Control
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label> phone number </Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              +91
                            </InputGroup.Text>
                            <Form.Control
                              placeholder="9421458711"
                              name="phone"
                              value={values.phone}
                              onChange={handleChange}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Address"
                            name="address_line_1"
                            value={values.address_line_1}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            placeholder="Country"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            placeholder="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            placeholder="city"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control
                            placeholder="413001"
                            name="pincode"
                            value={values.pincode}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control
                            type="date"
                            name="date_of_birth"
                            value={values.date_of_birth}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Gender</Form.Label>
                          <Form.Control
                            placeholder="413001"
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                          />
                          {/* <Form.Control
                                                        value={values.gender}
                                                    >
                                                    </Form.Control> */}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Admission Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="date_of_admission"
                            value={values.date_of_admission}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                            placeholder="Age"
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                          />
                          {/* <Form.Control
                                                        value={values.age}
                                                    /> */}
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Height</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="6ft4in"
                            name="height"
                            value={values.height}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label> Weight </Form.Label>
                          <Form.Control
                            placeholder="waight ex=50 kg"
                            name="weight"
                            value={values.weight}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Blood Group</Form.Label>
                          <Form.Control
                            placeholder="Blood Group"
                            name="blood_group"
                            value={values.blood_group}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Graid ID</Form.Label>
                          <Form.Control
                            placeholder="Graid ID"
                            name="grade_id"
                            value={values.grade_id}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>User ID</Form.Label>
                          <Form.Control
                            placeholder="User ID"
                            name="user_id"
                            value={values.user_id}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Category</Form.Label>
                          <Form.Control
                            placeholder="Category"
                            name="cast_category"
                            value={values.cast_category}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group>
                          <Form.Label>Religion</Form.Label>
                          <Form.Control
                            placeholder="Religion"
                            name="Religion"
                            value={values.religion}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="text-center">
                      <Button type="submit" variant="primary" size="lg">
                        {" "}
                        Update{" "}
                      </Button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default EditStudentPorfile_new;
