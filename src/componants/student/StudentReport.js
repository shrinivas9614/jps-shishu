import { useState, useCallback } from "react";
import { StudentSidebar } from "./studentSidebar";
import { Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { StudentReportTable } from "./StudentReportTable";

export default function StudentReport() {
    const [show, setShow] = useState("list");
    const [Id, setId] = useState();
    const _setOpenCallback = useCallback((show) => {
      setShow(show);
    });
    const shows = () => {
      switch (show) {
       
        case "list":
          return <StudentReportTable {...{ _setOpenCallback, setId }} />;
        // case "teacherInfo":return <ViewTeacherInfo{...{Id,_setOpenCallback}}/>
        default:
      }
    };
  
    return (
    <>
      <Helmet>
        <title>Student Report | JPS</title>
      </Helmet>

      <StudentSidebar />
      <div
        className="content-wrapper-client-lead"
        style={{ minHeight: " 1043px" }}
      >
        <Card style={{ minHeight: "1043px" }}>
          <Card.Body>
            <h4 className="text-center">student report</h4>
            {shows()}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
