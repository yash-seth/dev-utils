import React from 'react'
import "./ChatBot.css"
import CB from 'react-simple-chatbot';
import ChatBotOptionRedirect from './ChatBotOptionRedirect';

function ChatBot() {
  return (
    <div className="chatbot-main">
        <h1>Chatbot module</h1>
        <CB floating="true" steps={[
      {
        id: '1',
        message: 'How can I help you today?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Homepage', trigger: '3' },
          { value: 2, label: 'Donate', trigger: '4' },
          { value: 3, label: 'Contact Us', trigger: '5' },
        ],
      },
      {
        id: '3',
        component: (
            <ChatBotOptionRedirect url={"https://www.google.com"} option={"Homepage"}/>
          ),
          trigger: '6'
      },
      {
        id: '4',
        component: (
            <ChatBotOptionRedirect url={"https://www.google.com"} option={"Donate"}/>
          ),
          trigger: '6'
      },
      {
        id: '5',
        component: (
            <ChatBotOptionRedirect url={"https://www.google.com"} option={"Contact Us"}/>
          ),
          trigger: '6',
          hideInput: true
      },
      {
        id: '6',
        message: "Anything else I can help you with?",
        trigger: 'options'
      },
      {
        id: "options",
        options: [
            { value: 'yes', label: 'Yes', trigger: '2' },
            { value: 'no', label: 'No', trigger: 'end-message' },
          ],
      },
      {
        id: 'end-message',
        message: "Have a great day ahead!",
        end: true
      },
    ]} />
    </div>
  )
}

export default ChatBot