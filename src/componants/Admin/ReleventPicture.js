import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { ReleventPictureForm } from "../forms/ReleventPictureForm";
import api from "../forms/APIS";
import moment from "moment";

export const ReleventPicture = () => {
  const [show, setShow] = useState(false);
  const [match, setMatch] = useState(true);
  return (
    <>
      <Card>
        <Card.Header>
          <div>
            {show == false && <Link onClick={() => setShow(true)}>Add</Link>}

            {show == true && (
              <Link className="pull-right mb-2" onClick={() => setShow(false)}>
                <i className="fa fa-times"></i>
              </Link>
            )}
          </div>
        </Card.Header>
        <Card.Body>
          {show ? (
            <ReleventPictureForm match={match} />
          ) : (
            <RelatedPictureTable />
          )}
        </Card.Body>
      </Card>
    </>
  );
};

const RelatedPictureTable = () => {
  const [releventPicture, setReleventPicture] = useState([]);

  const getReleventPicture = () => {
    api
      .get("/relevent-pic-api")
      .then((response) => {
        console.log(response.data);
        setReleventPicture(response.data);
        console.log(
          "response",
          response.data[0]?.select_relevent_picture_question?.chapter_id
           
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getReleventPicture();
  }, []);

  return (
    <>
      <Table  >
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Topic</th>
            <th>Question</th>
            {/* <th>Answer</th> */}
          </tr>
        </thead>
        <tbody>
          {releventPicture.length > 0 &&
            releventPicture.map((relevent, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{moment(relevent.date).format("DD-MM-YYYY")}</td>
                  <td>
                    {
                      relevent?.select_relevent_picture_question?.chapter_id
                        ?.subject_id?.grade_id?.name
                    }
                  </td>
                  <td>
                    {
                      relevent?.select_relevent_picture_question?.chapter_id
                        ?.subject_id?.name
                    }
                  </td>
                  <td>
                    {
                      relevent?.select_relevent_picture_question?.chapter_id
                        ?.name
                    }
                  </td>
                  
                 <td>{relevent?.question}</td>
                </tr>
              </>
            ))}
        </tbody>
      </Table>
    </>
  );
};
