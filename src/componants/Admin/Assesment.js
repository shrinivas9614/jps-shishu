/** @format */

import { useState, useCallback } from "react";
import Adminsidebar from "./adminSidebard";
import { Card } from "react-bootstrap";
import AssesmentForm from "../forms/AssesmentForm";
import AdminAssesmentView from "./AdminAssesmintView";
import { ViewAssessmentInfo } from "./ViewAssessmentInfo";

const Assesment = () => {
  const [show, setShow] = useState("list");
  const [Id, setId] = useState();
  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });

  const shows = () => {
    switch (show) {
      case "add":
        return <AssesmentForm {...{ _setOpenCallback }} />;
      case "list":
        return <AdminAssesmentView {...{ _setOpenCallback, setId }} />;
      case "assessmentInfo":return <ViewAssessmentInfo{...{Id,_setOpenCallback}}/>
      default:
    }
  };
  return (
    <>
      {/* <Adminsidebar /> */}

      <Card style={{ minHeight: "1043px" }}>
        <Card.Body>
          <h4 className="text-center">Assessment</h4>
          {shows()}
        </Card.Body>
      </Card>
    </>
  );
};

export default Assesment;
