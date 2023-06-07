import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Button, Card, Form } from 'react-bootstrap'
import { TeacherSidebar } from './TeacherSidebar';
import { ViewTeacherProfile } from './ViewTeacherProfile';
import { EditTeacherProfile } from './EditTeacherProfile';
import {
    Col,
    FormControl,
    FormGroup,
    FormLabel,
    InputGroup,
    Row,
} from "react-bootstrap";

export const TeacherProfile = () => {
    const [edit, setEdit] = useState(false)

    return (
        <>
            <Helmet>
                <title>Teacher Profile | JPS</title>
            </Helmet>

            <TeacherSidebar />
            <div className="content-wrapper-client-lead" >

                <Card>
                    <Card.Body>

                        {edit == false &&
                            <div className='text-end m-3'>
                                <div >
                                    <Form.Group>
                                        <h4 className='text-center'>Profile Details</h4>
                                    </Form.Group>
                                </div>

                                <Button
                                    onClick={() => setEdit(true)}
                                >
                                    <i className='fa fa-edit' />
                                </Button>
                            </div>
                        }
                        {edit == true &&
                            <div className='text-end m-3'>
                                <div >
                                    <Form.Group>
                                        <h4 className='text-center'>Edit Profile Details</h4>
                                    </Form.Group>
                                </div>

                                <Button
                                    onClick={() => setEdit(false)}
                                >
                                    <i className='fa fa-times' />
                                </Button>
                            </div>
                        }

                        {
                            edit ?
                                <EditTeacherProfile />
                                : <ViewTeacherProfile />
                        }

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}