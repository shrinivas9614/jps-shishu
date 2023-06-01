import React,{useState,useCallback} from 'react'
import Adminsidebar from './adminSidebard'
import StudentForm from '../forms/studentForm'
import { StudentList } from './studentList'
import { Card } from 'react-bootstrap'
import { ViewStudentInfo } from './ViewStudentInfo'

export const Student = () => {
    const [show, setShow] = useState("list")
    const [Id,setId]=useState();
    const _setOpenCallback = useCallback(
        (show) => {
            setShow(show)
        },
    )
    const shows = () => {
        switch (show) {
            case "add": return <StudentForm {...{ _setOpenCallback }}/>;
            case "list": return <StudentList {...{ _setOpenCallback, setId }} />;
            // case "studentInfo":return <ViewStudentInfo{...{Id,_setOpenCallback}}/>
        }
    }
  return (
    <>
          <Adminsidebar />
          <div className="content-wrapper-client-lead" style={{ minHeight: " 1043px" }}>              
              <Card style={{ minHeight:'1043px'}}>
                    <Card.Body>
                          <h4 className='text-center'>Student</h4> 
                          {shows()}
                    </Card.Body>
                </Card>
          </div>
    </>
  )
}
