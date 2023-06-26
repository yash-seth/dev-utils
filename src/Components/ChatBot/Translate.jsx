import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Translate(props) {
    const [input, setInput] = useState("")
    const getTranslation = async () => {
        let lang = props.steps['language-options'].message
      await axios.post("http://127.0.0.1:5000/translate", JSON.stringify({
          q: props.steps.input.message,
          lang: lang === "Hindi" ? 'hi' : lang === "French" ? 'fr' : 'es',
      }),
      {
        headers: {'Content-Type': 'application/json'}
      })
      .then((response) => {setInput(response.data.text)})
      .catch((e) => alert(e))
    }
    useEffect(() => {
        getTranslation()
    }, [])
    
  return (
    <div>
        {input}
    </div>
  )
}

export default Translate