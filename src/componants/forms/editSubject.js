import { Formik } from 'formik'
import React from 'react'
import { Row, Form, Col, Button, Card } from 'react-bootstrap';

export const EditSubject = ({ _setOpenCallback }) => {
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
                            subject_name: "",
                        }}
                        onSubmit={(values, { setStatus, setSubmitting }) => {
                            console.log("final values", values);

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
                                                    value={values.grade_id}
                                                    placeholder="Select grade id"
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
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className='text-center mt-4'>
                                        <Button
                                            type="submit"
                                        >
                                            Submit
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
