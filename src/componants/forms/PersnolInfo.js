import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, InputGroup, Row } from "react-bootstrap";
import { states, bloodGroups } from "../utils/Utils";
import api from "./api";

export default function PersonalInfo() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    studentId: "",
    aadharNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    address: "",
    country: "",
    pinCode: "",
    dateOfBirth: "",
    gender: "",
    admissionDate: "",
    age: "",
    height: "",
    weight: "",
    bloodGroup: "",
    gradeId: "",
    userId: "",
    category: "",
    subCategory: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    api
      .get("/students")
      .then((response) => {
        console.log(response.data); // process the response data
        setStudents(response.data); // update the state with the fetched data
      })
      .catch((error) => {
        console.error(error); // handle any errors
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/students", formData)
      .then((response) => {
        console.log(response.data); // process the response data
        // Optionally, you can reset the form fields after successful submission
        setFormData({
          studentId: "",
          aadharNumber: "",
          firstName: "",
          middleName: "",
          lastName: "",
          emailId: "",
          phoneNumber: "",
          address: "",
          country: "",
          pinCode: "",
          dateOfBirth: "",
          gender: "",
          admissionDate: "",
          age: "",
          height: "",
          weight: "",
          bloodGroup: "",
          gradeId: "",
          userId: "",
          category: "",
          subCategory: "",
        });
        fetchStudents(); // Fetch the updated list of students
      })
      .catch((error) => {
        console.error(error); // handle any errors
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center">Student Form</h2>
      <Form onSubmit={handleSubmit}>
        {/* Rest of the form fields */}
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                name="studentId"
                placeholder="123456"
                value={formData.studentId}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Aadhar number</Form.Label>
              <Form.Control
                name="aadharNumber"
                placeholder="1234 1234 1234"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        // ...
        <Row>
          <Col md={4}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="ex. ramesh"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                name="middleName"
                placeholder="ex. ganesh"
                value={formData.middleName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="ex. deshmuk"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="emailId"
                placeholder="name@example.com"
                value={formData.emailId}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control
                  name="phoneNumber"
                  placeholder="9421458711"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
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
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                placeholder="Select state"
              >
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
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
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
                name="pinCode"
                placeholder="413001"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
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
                value={formData.gender}
                onChange={handleChange}
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
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
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
                value={formData.age}
                onChange={handleChange}
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
                value={formData.height}
                onChange={handleChange}
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
                value={formData.weight}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Form.Label>Blood Group</Form.Label>
              <Form.Select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
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
                name="graidId"
                placeholder="graid ID ex-123456"
                value={formData.graidId}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>User ID</Form.Label>
              <Form.Control
                name="userId"
                placeholder="user ID ex-123456"
                value={formData.userId}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                placeholder="category"
                value={formData.category}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Religion</Form.Label>
              <Form.Control
                name="religion"
                placeholder="religion"
                value={formData.religion}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Guardian's Name</Form.Label>
              <Form.Control
                name="guardianName"
                placeholder="guardian name"
                value={formData.guardianName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Guardian's Phone Number</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control
                  name="guardianPhoneNumber"
                  placeholder="9421458711"
                  value={formData.guardianPhoneNumber}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>  
        <Row>
          <Col md={10}>
            <div className="d-flex gap-2 justify-content-center mt-3">
              <Button variant="primary" size="lg" type="submit">
                Next
              </Button>
              <Button variant="primary" size="lg" onClick={fetchStudents}>
                Reset
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      {/* Display the fetched students */}
      {students.map((student) => (
        <div key={student.id}>
          <h4>
            {student.firstName} {student.lastName}
          </h4>
          {/* Display other student details */}
        </div>
      ))}
    </div>
  );
}
