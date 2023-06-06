import { Formik } from 'formik'
import React from 'react'
import { Row, Form, Col, Button, Card } from 'react-bootstrap';

export const ChapterForm = ({ _setOpenCallback }) => {
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
                            subject: "",
                            chapter: "",
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
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Select
                                                    value={values.subject}
                                                    placeholder="Select subject"
                                                >
                                                    <option>
                                                        Select subject
                                                    </option>
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
                                                    name="Chapter Name"
                                                    value={values.chapter}
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
