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

const ChapterForm = ({ _setOpenCallback }) => {
    const [subject, setSubject] = useState([]);
    const [selectedSubject, setselectedSubject] = useState("");


    const getSubject = () => {
        api
            .get("/subject-api")
            .then((response) => {
                console.log("response.data:", response.data);
                setSubject(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getSubject();
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
                            subject_id: "",
                            name: "",
                        }}
                        onSubmit={(
                            values,
                            { setStatus, setSubmitting, _setOpenCallback }
                        ) => {
                            values.subject_id = selectedSubject ? selectedSubject : "";
                            api
                                .post("/chapter-api", values)
                                .then((res) => {
                                    console.log("response", res);
                                    Swal.fire({
                                        icon: "success",
                                        title: "Success!",
                                        text: "Chapter Added successfully!",
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
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Select
                                                    value={selectedSubject}
                                                    name="subject_id"
                                                    placeholder="Select subject"
                                                    // onChange={handleChange}
                                                    onChange={(e) => {
                                                        setselectedSubject(e.target.value)
                                                    }}
                                                >
                                                    <option>Select subject</option>
                                                    {
                                                        subject.length > 0 &&
                                                        subject.map((sub) =>
                                                            <option key={sub.subject_id} value={sub.subject_id}>{sub.name}</option>
                                                            // <option value={sub.id}>{sub.name}</option>
                                                        )
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>
                                                    Chapter
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder='Chapter name'
                                                    name="name"
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

export default ChapterForm;