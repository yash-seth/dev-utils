import './App.css';
import { useState } from "react"
import SpeechRecognizer from './Components/SpeechRecognizer/SpeechRecognizer';
import TTS from './Components/TTS/TTS';
import VideoEmbedder from './Components/VideoEmbedder/VideoEmbedder';

function App() {
  const [inputText, setInputText] = useState("")
  return (
    <>
      <SpeechRecognizer setInputText={setInputText}/>
      <TTS inputText={inputText}/>
      <VideoEmbedder embedId="PJbIhBmSR7Y"/>
    </>
  );
}

export default App;