import React, { useState } from "react";
import Data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./circle.css";
import ReactAudioPlayer from 'react-audio-player';
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";

export default function Circle() {
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleImageClick = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((selectedName) => selectedName !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };
  const handleImageAudio = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };

  return (
    <>
      <h3> ग ने सुरु होणाऱ्या चित्रावर खून करा </h3><br />
      <div className="main_img" style={{ display: "grid", gridRow: "span 3" }}>

        {selectedOption && (
          <ReactAudioPlayer src={selectedOption.audio} autoPlay />
        )}
        {Data.options.map((option, index) => (
          <Row className="mb-2">
            <Col md={4}>
              <input type="checkbox" style={{ marginRight: "8px" }} />
              <div
                key={index}
                className="square bg-secondary rounded-circle text-center"
                style={{ width: "180px", height: "180px", margin: "5px", cursor: "pointer" }}
                onClick={() => { handleImageClick(option.name); handleImageAudio(option) }}>

                <img
                  src={option.image}
                  alt=""
                  style={{ width: "150px", height: "140px", paddingTop: "5px" }}
                />
                {selectedNames.includes(option.name) && <p className="fw-bolder" style={{ fontSize: '30px', padding: '40px', }}>{option.name}</p>}
              </div>
            </Col>
          </Row>
        ))
        }
        <div className="image_one" type="checkbox">
          {Data.question.map((item, index) => (
            <div
              key={index}
              className="square bg-none rounded"
              style={{ width: "220px", height: "220px", border: "10px solid", margin: "5px" }}
            >
              <img src={item.qimage} alt="" />
            </div>
          ))}
        </div>
      </div >
    </>
  );
}
