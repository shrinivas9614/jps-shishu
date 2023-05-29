
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, InputGroup, FormGroup } from "react-bootstrap";
import { states, bloodGroups } from "../utils/Utils";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import api from "./APIS";

export default function StudentForm({ _setOpenCallback }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    api
      .get("/stu-registration")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const StateValueChange = (event) => {
    console.log("ewowryoweiuy", event.target.value)
    formik.setFieldValue('state', event.target.value)
    setSelectedState(event.target.value)
  }

  const CityValueChange = (event) => {
    formik.setFieldValue('city', event.target.value)
    setSelectedCity(event.target.value)
  }

  const handleSubmit = (values) => {
    values['state'] = states[values['state']]['name']
    console.log("Final values", JSON.stringify(values));
    // Handle the submission logic here (e.g., update state, make API calls)
    api.post("/stu-registration", JSON.stringify(values))
      .then((response) => {
        console.log("response", response)
        alert("Added successfully");
        // _setOpenCallback("list");
      })
      .catch((error) => {
        console.log("Error", error)
        alert("something wrong", error.message)
      })
  };

  const formik = useFormik({
    initialValues: {
      student:6,
      aadhar_number: "",
      firstname: "",
      middlename: "",
      lastname: "",
      age: "",
      email: "",
      blood_group: "",
      city: "",
      country: "",
      gender: "",
      height: "",
      weight: "",
      address_line1: "",
      date_of_admission: "",
      date_of_birth: "",
      phone: "",
      pincode: "",
      religion: "",
      state: "",
      grade_id: "",
      user_id: "",
      cast_category: "",
      // avatar: "",
      // birthplace: "",
      // caste: "",
      // addmission_number: "",
      // app_token: "",
      // mode_of_transport: "",
      // mother_tongue: "",
      // nationality: "",
      // permenant_registration_number: "",
      // school_house: "",
      // sub_cast: "",
      // Add other form field initial values here
    },
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <div>
        <section className="container-fluid-leads-grid">
          <Card>
            <Card.Header style={{ backgroundColor: "transparent" }} className="border-0">
              <Row>
                <Col>
                  <Link className="float-end fs-5 text-danger" onClick={() => { _setOpenCallback("list") }}>
                    <i className="fa fa-times" />
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  {/* <Col md={6}>
                    <Form.Group>
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control
                        name="student"
                        placeholder="123456"
                        value={formik.values.student}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col> */}
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Aadhar number</Form.Label>
                      <Form.Control
                        name="aadhar_number"
                        placeholder="1234 1234 1234"
                        value={formik.values.aadhar_number}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        name="firstname"
                        placeholder="ex. ramesh"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Middle Name</Form.Label>
                      <Form.Control
                        name="middlename"
                        placeholder="ex. ganesh"
                        value={formik.values.middlename}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        name="lastname"
                        placeholder="ex. deshmuk"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control
                        name="email"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                        <Form.Control
                          name="phone"
                          placeholder="9421458711"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="address_line1"
                        placeholder="Address"
                        value={formik.values.address_line1}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        name="country"
                        placeholder="Country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        className="mb-2"
                        value={formik.values.state}
                        onChange={(e) => StateValueChange(e)}
                        placeholder="Select state"
                      >
                        <option value=''>Select State</option>
                        {states.map((state, index) => (
                          <option key={index} value={index}>
                            {state.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Select
                        className="mb-2"
                        value={formik.values.city}
                        onChange={(e) => CityValueChange(e)}
                        placeholder="City"
                      >
                        {selectedState !== "" &&
                          states[selectedState].cities.map((city, index) => (
                            <option key={index} value={index}>
                              {city}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        name="pincode"
                        placeholder="413001"
                        value={formik.values.pincode}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="date_of_birth"
                        value={formik.values.date_of_birth}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Admission Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="date_of_admission"
                        value={formik.values.date_of_admission}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Height</Form.Label>
                      <Form.Control
                        type="text"
                        name="height"
                        placeholder="6ft4in"
                        value={formik.values.height}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Weight</Form.Label>
                      <Form.Control
                        type="text"
                        name="weight"
                        placeholder="weight ex=50 kg"
                        value={formik.values.weight}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Form.Label>Blood Group</Form.Label>
                      <Form.Select
                        name="blood_group"
                        value={formik.values.blood_group}
                        onChange={formik.handleChange}
                      >
                        {bloodGroups.map((bgrup) => (
                          <option key={bgrup}>{bgrup}</option>
                        ))}
                      </Form.Select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Graid ID</Form.Label>
                      <Form.Control
                        name="grade_id"
                        type="number"
                        placeholder="graid ID ex-123456"
                        value={formik.values.grade_id}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>User ID</Form.Label>
                      <Form.Control
                        name="user_id"
                        type="number"
                        placeholder="user ID ex-123456"
                        value={formik.values.user_id}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        name="cast_category"
                        placeholder="cast_category"
                        value={formik.values.cast_category}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Religion</Form.Label>
                      <Form.Control
                        name="religion"
                        placeholder="religion"
                        value={formik.values.religion}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Guardian's Name</Form.Label>
                      <Form.Control
                        name="guardianName"
                        placeholder="guardian name"
                        value={formik.values.guardianName}
                        onChange={formik.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Guardian's Phone Number</Form.Label>
                      <InputGroup className="mb-3">=
                        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                        <Form.Control
                          name="guardianPhoneNumber"
                          placeholder="9421458711"
                          value={formik.values.guardianPhoneNumber}
                          onChange={formik.handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row> */}
                <Row>
                  <Col md={10}>
                    <div className="d-flex gap-2 justify-content-center mt-3">
                      <Button variant="primary" size="lg" type="submit">
                        Submit
                      </Button>
                      <Button variant="primary" size="lg" onClick={fetchStudents}>
                        Reset
                      </Button>
                    </div>
                  </Col>
                </Row>
                {/* Add other form fields here */}
                {/* <Button type="submit">Submit</Button> */}
              </Form>
            </Card.Body>
          </Card>
        </section>
      </div>
    </div>
  );
}
