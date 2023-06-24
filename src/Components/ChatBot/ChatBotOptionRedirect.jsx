import React from 'react'

function ChatBotOptionRedirect({ url, option }) {
  return (
    <a href={url} target='_blank'>Click me to redirect to {option}</a>
  )
}

export default ChatBotOptionRedirect