import React from 'react'
import QRCode from 'react-qr-code';
import "./QRCodeGenerator.css"

function QRCodeGenerator({ url }) {
  return (
    <div className="QRCode-main">
        <h2>QR Code Generator</h2>
        <p>QR Code for url: <a href={url}>{url}</a></p>
        <QRCode
            title="GeeksForGeeks"
            value={url}
        />
    </div>
  )
}

export default QRCodeGenerator