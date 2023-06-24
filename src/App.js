import './App.css';
import { useState } from "react"
import SpeechRecognizer from './Components/SpeechRecognizer/SpeechRecognizer';
import TTS from './Components/TTS/TTS';
import VideoEmbedder from './Components/VideoEmbedder/VideoEmbedder';
import QRCodeGenerator from './Components/QRCodeGenerator/QRCodeGenerator';
import VideoCall from './Components/VideoCall/VideoCall';
import Map from './Components/Map/Map';
import MUIComponents from './Components/MUIComponents/MUIComponents';
import ChatBot from './Components/ChatBot/ChatBot';

function App() {
  const [inputText, setInputText] = useState("")
  return (
    <>
      <SpeechRecognizer setInputText={setInputText}/>
      <TTS inputText={inputText}/>
      <VideoEmbedder embedId="xuCn8ux2gbs"/>
      <QRCodeGenerator url="https://www.youtube.com/watch?v=xuCn8ux2gbs"/>
      <VideoCall />
      <Map />
      <MUIComponents />
      <ChatBot />
    </>
  );
}

export default App;