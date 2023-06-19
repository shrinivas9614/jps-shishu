import React, { useState, useEffect } from 'react'
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
import api from '../forms/APIS'
import { Link } from 'react-router-dom';
import moment from "moment";

function EditTeacherProfile_new({ _setOpenCallback, id, setEdit }) {
    // const [selectedState, setSelectedState] = useState("");
    // const [selectedCity, setSelectedCity] = useState("");
    const [view, setView] = useState();
    const [show, setShow] = useState(false);

    const getTeacherinfo_new = () => {
        api
            .get("/teacher-detail/" + id + "/")
            .then((response) => {
                setView(response.data);
                console.log("get edit response.data", response.data)
                console.log('new Date(view?.date_of_joining): ', new Date(response.data?.date_of_joining))
                setShow(true)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    console.log("view", view, "id", id)
    useEffect(() => {
        getTeacherinfo_new();
        // setSelectedCity("");
    }, []);

    return (
        <>
            <Helmet>
                <title>Edit Teacher Profile | JPS</title>
            </Helmet>
            {show && (
                <Card>
                    <Card.Body>
                        <Formik
                            initialValues={{
                                aadhar_number: view?.aadhar_number,
                                address_line_1: view?.address_line_1,
                                city: view?.city,
                                country: view?.country,
                                date_of_birth: `${new Date(view.date_of_birth).toISOString().split('T')[0]}`,
                                date_of_joining: `${new Date(view.date_of_joining).toISOString().split('T')[0]}`,
                                email: view?.email,
                                employee_id: view?.employee_id,
                                designation: view?.designation,
                                father_name: view?.father_name,
                                firstname: view?.firstname,
                                gender: view?.gender,
                                height: view?.height,
                                lastname: view?.lastname,
                                marital_status: view?.marital_status,
                                middlename: view?.middlename,
                                mobile: view?.mobile,
                                pan_number: view?.pan_number,
                                phone: view?.phone,
                                pincode: view?.pincode,
                                spause_name: view?.spause_name,
                                state: view?.state,
                                weight: view?.weight,
                            }}

                            onSubmit={(values, { setStatus, setSubmitting }) => {
                                // values.state = selectedState ? selectedState : "";
                                // values.city = selectedCity ? selectedCity : "";
                                api
                                    .put(`/teacher-detail/${id}/`, values)
                                    .then((response) => {
                                        console.log("Edit response Data: ", response.data);
                                        setEdit(false)
                                        alert("Profile Data Updated Successfully!");
                                    })
                                    .catch((error) => {
                                        console.log("Error", error);
                                        alert(
                                            "Profile Data Not Updated!"
                                        );
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
                                        <Row className="mb-2">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Aadhar number</Form.Label>
                                                    <Form.Control
                                                        name="aadhar_number"
                                                        value={values.aadhar_number}
                                                        // value={view?.aadhar_number}
                                                        onChange={handleChange}
                                                        placeholder="Aadhar Number"
                                                        type="text"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md={4}>
                                                <Form.Group>
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control
                                                        placeholder="First Name "
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
                                        <Row className="mb-2">
                                            <Col md={6}>
                                                <FormGroup>
                                                    <FormLabel>Pan Number</FormLabel>
                                                    <FormControl
                                                        placeholder="ABCD1234E"
                                                        name="pan_number"
                                                        value={values.pan_number}
                                                        onChange={handleChange}
                                                    ></FormControl>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <FormLabel>Father Name</FormLabel>
                                                    <FormControl
                                                        placeholder="Father Name"
                                                        name="father_name"
                                                        value={values.father_name}
                                                        onChange={handleChange}
                                                    ></FormControl>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md={6}>
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
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label> Phone Number </Form.Label>
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
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md={6}>
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
                                            <Col md={6}>
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
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md={6}>
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
                                            <Col md={6}>
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
                                        <Row className="mb-2">
                                            <Col md={6}>
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
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control
                                                        name="gender"
                                                        value={values.gender}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
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
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Date of Joining</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name="date_of_joining"
                                                        value={values.date_of_joining}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label> Designation </Form.Label>
                                                    <Form.Control
                                                        placeholder="Designation"
                                                        name="designation"
                                                        value={values.designation}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label> Marital Status </Form.Label>
                                                    <Form.Control
                                                        placeholder="Marital Status"
                                                        name="marital_status"
                                                        value={values.marital_status}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mb-2">
                                            <Col md={6}>
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
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label> Waight </Form.Label>
                                                    <Form.Control
                                                        placeholder="waight ex=50 kg"
                                                        name="weight"
                                                        value={values.weight}
                                                        onChange={handleChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <div className='text-center'>
                                            <Button type="submit" variant="primary" size="lg">
                                                {" "}
                                                Update{" "}
                                            </Button>
                                        </div>
                                    </Form>
                                </>
                            )}
                        </Formik>
                    </Card.Body >
                </Card >
            )}
        </>
    );
}

export default EditTeacherProfile_new;