import './App.css';
import { useState } from "react"
import SpeechRecognizer from './Components/SpeechRecognizer/SpeechRecognizer';
import TTS from './Components/TTS/TTS';

function App() {
  const [inputText, setInputText] = useState("")
  return (
    <>
      <SpeechRecognizer setInputText={setInputText}/>
      <TTS inputText={inputText}/>
    </>
  );
}

export default App;