/** @format */

import React, { useState, useCallback } from "react";
import * as Yup from "yup";
import AllocationForm from "../forms/AllocationForm";
import StudentAllotList from "./StudentAllotList";

const schema = Yup.object().shape({});

const StudentComp = () => {
  const [show, setShow] = useState("list");
  const [Id, setId] = useState();

  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });

  const shows = () => {
    switch (show) {
      case "add":
        return <AllocationForm {...{ _setOpenCallback }} />;
      case "list":
        return <StudentAllotList {...{ _setOpenCallback, setId }} />;
      default:
    }
  };

  return (
    <div style={{ minHeight: " 1043px" }}>
      <div>
        <h4 className="text-center">Student List</h4>
        {shows()}
      </div>
    </div>
  );
};

export default StudentComp;
