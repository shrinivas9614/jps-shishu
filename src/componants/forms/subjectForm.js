import { Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
    Row, Form, Col, Button, Card, FormControl,
    FormGroup,
    FormLabel,
} from 'react-bootstrap';
import * as Yup from "yup";
import api from "../forms/APIS";

const SubjectForm = ({ _setOpenCallback }) => {
    const [grade, setGrade] = useState([]);
    const [selectedGrade, setselectedGrade] = useState("");


    const getGrade = () => {
        api
            .get("/grade-api")
            .then((response) => {
                console.log("response.data:", response.data);
                setGrade(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getGrade();
    }, [])

    return (
        <>
            <Card>
                <div className='text-end m-3'>
                    <Button
                        onClick={() => _setOpenCallback("list")}
                    >
                        <i className='fa fa-times' />
                    </Button>
                </div>
                <Card.Body>
                    <Formik
                        initialValues={{
                            grade_id: "",
                            name: "",
                        }}
                        onSubmit={(
                            values,
                            { setStatus, setSubmitting, _setOpenCallback }
                        ) => {
                            values.grade_id = selectedGrade ? selectedGrade : "";
                            api
                                .post("/subject-api", values)
                                .then((res) => {
                                    console.log("response", res);
                                    Swal.fire({
                                        icon: "success",
                                        title: "Success!",
                                        text: "Subject Added successfully!",
                                    }).then(() => { });
                                })
                                .catch((error) => {
                                    console.log("error", error);
                                    alert("Error");
                                })
                                .finally(() => {
                                    setSubmitting(false);
                                });
                        }}

                    // onSubmit={(values, { setStatus, setSubmitting }) => {
                    //     console.log("final values", values);

                    // }}
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
                            status
                        }) => (
                            <>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Grade</Form.Label>
                                                <Form.Select
                                                    value={selectedGrade}
                                                    name="grade_id"
                                                    placeholder="Select grade id"
                                                    // onChange={handleChange}
                                                    onChange={(e) => {
                                                        setselectedGrade(e.target.value)
                                                    }}
                                                >
                                                    <option>Select Grade</option>
                                                    {
                                                        grade.length > 0 &&
                                                        grade.map((gra) =>
                                                            <option key={gra.grade_id} value={gra.grade_id}>{gra.name}</option>
                                                            // <option value={gra.id}>{gra.name}</option>
                                                        )
                                                    }

                                                    {/* <Form.Select
                                                    className="mb-2"
                                                    value={selectedState}
                                                    onChange={(e) => {
                                                        setSelectedState(e.target.value);
                                                    }}
                                                    placeholder="Select state"
                                                >
                                                    <option >
                                                        select state
                                                    </option>
                                                    {states.map((state, index) => (
                                                        <option key={index} value={index}>
                                                            {state.name}
                                                        </option>
                                                    ))}
                                                </Form.Select> */}

                                                    {/* <Col md={6}>
                                                        <FormGroup>
                                                            <Form.Label>Blood Group</Form.Label>
                                                            <Form.Select
                                                                name="blood_group"
                                                                value={values.blood_group}
                                                                onChange={handleChange}
                                                            >
                                                                {bloodGroups.map((bgrup) => (
                                                                    <option key={bgrup}>{bgrup}</option>
                                                                ))}
                                                            </Form.Select>
                                                        </FormGroup>
                                                    </Col> */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>
                                                    Subject
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder='Subject name'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center mt-3 ">
                                        <Button md={2} type="submit">
                                            {" "}
                                            submit{" "}
                                        </Button>
                                    </div>
                                </Form>
                            </>)}
                    </Formik>
                </Card.Body>
            </Card>

        </>

    );
};

export default SubjectForm;
