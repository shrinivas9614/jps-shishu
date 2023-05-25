import React, { useState, useCallback } from 'react'
import Adminsidebar from './adminSidebard'
import TeacherForm from '../forms/TeacherForm'
import { TeacherList } from './teacherList'
import { Card } from 'react-bootstrap'

export const Teacher = () => {
    const [show, setShow] = useState("list")
    const _setOpenCallback = useCallback(
        (show) => {
            setShow(show)
        },
    )
    const shows = () => {
        switch (show) {
            case "add": return <TeacherForm {...{ _setOpenCallback }} />;
            case "list": return <TeacherList {...{_setOpenCallback}}/>;
        }
    }
    return (
        <>
            <Adminsidebar />
            <div className="content-wrapper-client-lead" style={{ minHeight: " 1043px" }}>
                <Card style={{ minHeight: '1043px' }}>
                    <Card.Body>
                        <h4 className='text-center'>Teacher</h4> 
                    {shows()}
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}
