import { Formik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Row, Form, Col, Button, Card } from 'react-bootstrap';
import api from '../forms/APIS'

export const EditSubject = ({ _setOpenCallback, subject_id, setEdit }) => {
    const [view, setView] = useState();
    const [show, setShow] = useState(false);

    const getSubjectinfo = () => {
        api
            .get(`/subject-detail/${subject_id}/`)
            .then((response) => {
                setView(response.data);
                console.log("get edit getSubjectinfo", response.data)
                // console.log('new Date(view?.date_of_birth): ', new Date(response.data?.date_of_birth))
                setShow(true)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    console.log("view", view, "subject_id", subject_id)
    useEffect(() => {
        getSubjectinfo();
        // setSelectedCity("");
    }, []);

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
                            grade_id: view?.grade_id,
                            subject_name: view?.subject_name,
                        }}
                        onSubmit={(values, { setStatus, setSubmitting }) => {
                            console.log("final values", values);

                            api
                                .post(`/subject-detail/${subject_id}/`, values)
                                .then((response) => {
                                    console.log("Edit response Data: ", response.data);
                                    setEdit(false)
                                    alert("Subject Data Updated Successfully!");
                                })
                                .catch((error) => {
                                    console.log("Error", error);
                                    alert(
                                        "Subject Data Not Updated!"
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
                            status
                        }) => (
                            <>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={4}>
                                            <Form.Group>
                                                <Form.Label>Grade</Form.Label>
                                                <Form.Select
                                                    name="grade_id"
                                                    value={values.grade_id}
                                                    placeholder="Select Grade id"
                                                    onChange={handleChange}
                                                    type="text"
                                                >
                                                    <option>Select Grade</option>
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
                                                    name="subject_name"
                                                    placeholder='Subject name'
                                                    value={values.subject_name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className='text-center mt-4'>
                                        <Button type="submit" variant="primary" size="lg">
                                            {" "}
                                            Update{" "}
                                        </Button>
                                    </div>
                                </Form>
                            </>)}


                    </Formik>
                </Card.Body>
            </Card>
        </>
    )
}
