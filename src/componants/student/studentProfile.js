import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { ViewStudentProfile } from './viewStudentProfile'
import { StudentSidebar } from './studentSidebar'
import { EditStudentPorfile } from './editStudentProfile'

export const StudentProfile = () => {
    const [edit, setEdit] = useState(false)
    return (
        <>
            <StudentSidebar />
            <div className="content-wrapper-client-lead" >
                <Card>
                    <Card.Body>
                        {edit == false &&
                            <div className='text-end m-3'>
                                <Button
                                    onClick={() => setEdit(true)}
                                >
                                    <i className='fa fa-edit' />
                                </Button>
                            </div>
                        }
                        {edit==true &&
                            <div className='text-end m-3'>
                                <Button
                                    onClick={() => setEdit(false)}
                                >
                                    <i className='fa fa-times' />
                                </Button>
                            </div>
                        }

                        {
                            edit ?
                                <EditStudentPorfile />
                                : <ViewStudentProfile />
                        }

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
