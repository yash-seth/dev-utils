import React from "react";
import { TextToSpeech, Positions, Sizes } from "tts-react";
import "./TTS.css"

function TTS({ inputText }) {
  return (
    <div className="TTS-main">
        <div>
            <h2>Text to Speech Module</h2>
        </div>
        <div>
            <TextToSpeech
                markTextAsSpoken
                align="vertical"
                size={Sizes.SMALL}
                position={Positions.TL}
            >
                <p>{inputText}</p>
            </TextToSpeech>
        </div>
    </div>
  );
}

export default TTS;
