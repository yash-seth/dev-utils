import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./ConsumeAPI.css"

function ConsumeAPI() {
    const [data, setData] = useState({})
    const getData = async () => {
        await axios.get("http://127.0.0.1:5000/get-data")
        .then((data) => {setData(data.data)})
        .catch((e) => alert(e))
    }
  return (
    <div className='consumeAPI-main'>
        <h1>ConsumeAPI Component - Flask</h1>
        <p>{data.Modules}</p>
        <p>{data.Subject}</p>
        <button onClick={() => getData()}>Get Data</button>
    </div>
  )
}

export default ConsumeAPI