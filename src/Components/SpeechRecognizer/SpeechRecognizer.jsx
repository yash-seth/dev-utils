import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./SpeechRecognizer.css"

function SpeechRecognizer() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  return (
    <>
    <div className="SpeechRecognizer-main">
        <div>
            <h2>Text-to-Speech Module</h2>
        </div>
        <div>
            <p>Microphone: {listening ? "on" : "off"}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    </div>
    </>
  );
}

export default SpeechRecognizer;
