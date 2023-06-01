import React,{useState,useEffect} from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../forms/APIS'

export const StudentList = ({_setOpenCallback, setId}) => {
    const [student, setStudent] = useState([])
    const getStudentList = () => {
        api
            .get("/student-list ")
            .then((response) => {
                console.log(response.data); // process the response data
                setStudent(response.data); // update the state with the fetched data
            })
            .catch((error) => {
                console.error(error); // handle any errors
            });
    };
    useEffect(() => {
        getStudentList();
    }, [])

  return (
    <>
          <Card>
              <Card.Header 
              style={{backgroundColor:'transparent'}}
              className='border-0'
              >
                  <Row>
                      <Col>
                          <Link className='float-end fs-5'
                              onClick={() => _setOpenCallback("add")}
                          >Add</Link>
                      </Col>
                  </Row>
              </Card.Header>
              <Card.Body>
                  <Table 
                  className='text-center'
                  striped bordered hover>
                      <thead>
                          <tr>
                              <th>Sr.No</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email ID</th>
                              <th>Phone number</th>
                              <th>Gender</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                         {student.length>0 &&
                         student.map((stu,index)=>(
                            <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{stu.firstname}</td>
                                <td>{stu.lastname}</td>
                                <td>{stu.email}</td>
                                <td>{stu.phone}</td>
                                <td>{stu.gender}</td>
                                <td>
                                <Button
                                    onClick={()=>{
                                        _setOpenCallback("studentInfo")
                                        setId(stu.id)}}
                                    >
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </Button>  
                                </td>
                            </tr>
                            </>
                         ))
                         }

                      </tbody>
                  </Table>
              </Card.Body>
          </Card>
    </>
  )
}
