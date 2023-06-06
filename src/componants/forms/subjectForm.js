import { Formik } from 'formik'
import React, { useState ,useEffect} from 'react'
import { Row, Form, Col, Button, Card } from 'react-bootstrap';
import api from "../forms/APIS";

export const SubjectForm = ({ _setOpenCallback }) => {
    const [grade,setGrade]=useState([]);

    const getGrade = () => {
        api
            .get("/grade-api")
            .then((response) => {
                console.log(response.data);
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
                                                    name="grade_id"
                                                    placeholder="Select grade id"
                                                >
                                                    <option>Select Grade</option>
                                                    {
                                                        grade.length>0 &&
                                                        grade.map((gra,index)=>
                                                            <option value={gra.id}>{gra.name}</option>
                                                        )
                                                    }
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
