import React from 'react'
import "./ChatBot.css"
import CB from 'react-simple-chatbot';
import Translate from './Translate';

function ChatBot() {
  return (
    <div className="chatbot-main">
        <h1>Chatbot module</h1>
        <CB headerTitle="Translat-o-bot" floating="true" steps={[
      {
        id: 'intro-message',
        message: 'What would you like to translate?',
        trigger: 'input',
      },
      {
        id: 'input',
        user: true,
        trigger: 'language-options-message',
      },
      {
        id: 'language-options-message',
        message: 'Which language?',
        trigger: "language-options"
      },
      {
        id: 'language-options',
        options: [
          { value: 1, label: 'Hindi', trigger: 'translation' },
          { value: 2, label: 'French', trigger: 'translation' },
          { value: 3, label: 'Spanish', trigger: 'translation' },
        ],
      },
      {
        id: 'translation',
        component: (
            <Translate />
          ),
          trigger: 'intro-message'
      },
      // {
      //   id: 'end-message-options',
      //   message: "Anything else I can help you with?",
      //   trigger: "end-options"
      // },
      // {
      //   id: 'end-options',
      //   options: [
      //     { value: 'yes', label: 'Yes', trigger: 'intro-message' },
      //     { value: 'no', label: 'No', trigger: 'exit' },
      //   ]
      // },
      // {
      //   id: 'exit',
      //   message: "Have a great day ahead!",
      //   end: true
      // }
    ]} />
    </div>
  )
}

export default ChatBot