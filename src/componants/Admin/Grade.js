import { useState, useCallback } from 'react';
import Adminsidebar from './adminSidebard'
import { Card } from 'react-bootstrap'
import GradeForm from '../forms/GradeForm';
import GradeList from './GradeList';
export default function AdminGradeTable() {
  const [show, setShow] = useState("list")
  const [Id,setId]=useState();
  const _setOpenCallback = useCallback(
      (show) => {
          setShow(show)
      },
  )
  const shows = () => {
      switch (show) {
          case "add": return <GradeForm {...{ _setOpenCallback}} />;
          case "list": return <GradeList {...{_setOpenCallback,setId }}/>;
          // case "teacherInfo":return <ViewTeacherInfo{...{Id,_setOpenCallback}}/>
          default:
      }
  }
  return (
    <>
    <Adminsidebar />
    <div className="content-wrapper-client-lead" style={{ minHeight: " 1043px" }}>
        <Card style={{ minHeight: '1043px' }}>
            <Card.Body>
                <h4 className='text-center'>Grade</h4> 
            {shows()}
            </Card.Body>
        </Card>
    </div>
</>
  )
}