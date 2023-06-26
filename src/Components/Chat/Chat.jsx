import React from "react";
import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import "./Chat.css"

function Chat() {
  const [currentUser, setCurrentUser] = useState("Protostar");
  const [key, setKey] = useState(0);
  return (
    <>
      <div className="chat-main">
        <h1>Chat Module</h1>
        <button
          onClick={() => {
            setKey(key + 1);
            setCurrentUser("Protostar");
          }}
        >
          Protostar
        </button>
        <button
          onClick={() => {
            setKey(key + 1);
            setCurrentUser("Yash");
          }}
        >
          Yash
        </button>
        {/* Makes common group chat, create new chat, to create new group chat. go to options, to add in new users */}
        <ChatEngine
          key={key}
          projectID={process.env.REACT_APP_PROJECT_ID}
          userName={currentUser} // current user name
          userSecret="1234" // current user pwd
        />
      </div>
    </>
  );
}

export default Chat;
