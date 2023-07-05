import React,{useState,useEffect} from "react";
import { Card, Table } from "react-bootstrap";
import api from "../forms/APIS";
import { TeacherSidebar } from "./TeacherSidebar";
import { useParams } from "react-router-dom";
import moment from "moment";

export const TeacherAssessment = () => {
     const { id } = useParams();
     console.log("Teacher Id: ", id);
    //  console.log("receivedData: ", receivedData.Id);
    const [view, setView] = useState([]);
     const getTeacherAssessment = () => {
       api
         .get("/teacher/assessment/" + id + "/")
         .then((response) => {
           setView(response.data); // update the state with the fetched data
         })
         .catch((error) => {
           console.error(error); // handle any errors
         });
     };
     console.log("view",view)

     useEffect(() => {
       getTeacherAssessment();
     
      
     }, [])
     
     
  return (
    <>
      <TeacherSidebar id={id} />
      <div className="content-wrapper-client-lead">
        <Card className="py-4">
          <Card.Header className="border-0 bg-transparent">
            <h6>Assessment</h6>
          </Card.Header>
          <Card.Body>
            <Table className="text-center">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Assessment Name</th>
                  <th>Grade</th>
                  <th>Subject</th>
                  <th>Chapter</th>
                  <th>Question Type</th>
                  <th>Date Of Assessement</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {view.length > 0 &&
                  view.map((vie, index) => (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{vie?.name}</td>
                        <td>{vie?.chapter_id?.subject_id?.grade_id?.name}</td>
                        <td>{vie?.chapter_id?.subject_id?.name}</td>
                        <td>{vie?.chapter_id?.name}</td>
                        <td>{vie?.question_type}</td>
                        <td>
                          {moment(vie?.date_of_assessment).format("DD-MM-YYYY")}
                        </td>
                        <td></td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
