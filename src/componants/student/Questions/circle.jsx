import React, { useState } from "react";
import Data from "./data.json";
import { AiOutlineCheck } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./circle.css";
import ReactAudioPlayer from "react-audio-player";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export default function Circle() {
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleImageClick = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((selectedName) => selectedName !== name));
      setSelectedNames(selectedNames.filter((selectedName) => selectedName !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };
  
  const isImageSelected = (name) => {
    return selectedNames.includes(name);
  };
  const handleImageAudio = (option) => {
    setSelectedOption(option);
    console.log(selectedOption);
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
                style={{ width: "180px", height: "180px", margin: "10px", cursor: "pointer" }}
                onClick={() => { handleImageClick(option.name); handleImageAudio(option) }}>

                <img
                  src={option.image}
                  alt=""
                  style={{ width: "150px", height: "150px", paddingTop: "5px" }}
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
              style={{ width: "220px", height: "230px", border: "10px solid", margin: "10px" }}
            >
              <img src={item.qimage} alt="" />
            </div>
          ))}
        </div>
      </div >
    </>
  );
}
