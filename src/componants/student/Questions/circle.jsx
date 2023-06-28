import React, { useState } from "react";
import Data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./circle.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Circle() {
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleImageClick = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((selectedName) => selectedName  !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };
  const handleImageAudio = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };

  return (
    <div className="main_img" style={{ display: "grid", gridRow: "span 3" }}>
       {selectedOption && (
        <ReactAudioPlayer src={selectedOption.audio} autoPlay  />
      )}
      {Data.options.map((option, index) => (
        <div
          key={index}
          className="square bg-secondary rounded-circle text-center"
          style={{ width: "180px", height: "180px", margin: "10px", cursor: "pointer" }}
          onClick={() =>{ handleImageClick(option.name); handleImageAudio(option) }}>
          <img
            src={option.image}
            alt=""
            style={{ width: "150px", height: "150px", paddingTop: "5px" }}
          />
          
          {selectedNames.includes(option.name) && <p className="fw-bolder" style={{ fontSize: '30px', padding: '40px', }}>{option.name}</p>}
        </div>
      ))}
      <div className="image_one">
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
      
    </div>
  );
}
