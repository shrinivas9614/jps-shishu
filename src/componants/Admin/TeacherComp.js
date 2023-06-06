/** @format */

import React, { useState, useCallback } from "react";
import * as Yup from "yup";
import TeacherAllotList from "./TeacherAllotList";
import TeacherAllocationForm from "../forms/TeacherAllocationForm";

const schema = Yup.object().shape({});

const TeacherComp = () => {
  const [show, setShow] = useState("list");
  const [Id, setId] = useState();

  const _setOpenCallback = useCallback((show) => {
    setShow(show);
  });

  const shows = () => {
    switch (show) {
      case "add":
        return <TeacherAllocationForm {...{ _setOpenCallback }} />;
      case "list":
        return <TeacherAllotList {...{ _setOpenCallback, setId }} />;
      default:
    }
  };

  return (
    <div style={{ minHeight: " 1043px" }}>
      <div>
        <h4 className="text-center">Teacher List</h4>
        {shows()}
      </div>
    </div>
  );
};

export default TeacherComp;
