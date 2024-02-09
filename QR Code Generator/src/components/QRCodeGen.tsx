// npm install react-qr-code
import { useState } from "react";
import QRCode from "react-qr-code"

const QRCodeGen = () => {
    const [QrText, setQrText] = useState<string>("");
    const [textValue, settextValue] = useState<string>("")
  return (
    <div>
        <h1>Enter Text to Generate QR Code of the Text</h1>
        <input type="text" value={QrText} onChange={(e)=>{
            setQrText(e.target.value)
        }}/>
        <button onClick={()=>{
            settextValue(QrText)
        }}>Create</button>
        <QRCode value={textValue}/>
    </div>
  )
}
// Code By Devanjoy Das
export default QRCodeGen