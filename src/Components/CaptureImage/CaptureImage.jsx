import React from "react";
import { useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./CaptureImage.css"

function CaptureImage() {
  const [imgSrc, setImgSrc] = useState("");

  const videoConstraints = {
    width: 640,
    height: 360,
    facingMode: "user",
  };

  useEffect(() => {
    console.log(imgSrc);
  }, [imgSrc]);

  return (
    <>
      <div className="capture-main">
            <h4>Live Feed</h4>
            <Webcam
            audio={false}
            height={360}
            screenshotFormat="image/jpeg"
            width={640}
            videoConstraints={videoConstraints}
            >
            {({ getScreenshot }) => (
                <button
                onClick={() => {
                    setImgSrc(getScreenshot());
                }}
                >
                Capture photo
                </button>
            )}
            </Webcam>
        <div>
            <h4>Captured Image</h4>
            {imgSrc !== "" && (
            <img src={`${imgSrc}`} alt="uploads" className="image" />
            )}
        </div>
      </div>
    </>
  );
}

export default CaptureImage;
