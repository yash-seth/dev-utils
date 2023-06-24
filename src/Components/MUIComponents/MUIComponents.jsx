import React from 'react'
import Popup from './Popup'
import AlertDialog from './AlertDialog'
import "./MUIComponents.css"

function MUIComponents() {
  return (
    <div className='MUIComponents-main'>
        <h1>MUI Components</h1>
        <Popup />
        <AlertDialog />
    </div>
  )
}

export default MUIComponents