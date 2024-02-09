import { useState } from "react"
import "./style.css"

const ColorGenerator = () => {

    const [isHex, setisHex] = useState<boolean>(true)
    const hexArray:string[] = ["A","B","C","D","E","F"]
    const [hexNumberString, sethexNumberString] = useState<string>("")
    const [ArrayRGB, setArrayRGB] = useState<number[]>([])

    const generateHexColor = ()=>{
        let hexNumber:string = "";
        for(let i=1;i<=3;i++){
            hexNumber = hexNumber + Math.floor((Math.random()*9 + 1)).toString()
        }
        for(let i=4;i<=6;i++){
            hexNumber = hexNumber + hexArray[Math.floor((Math.random()*6))]
        }
        sethexNumberString(hexNumber)

    }

    const generateRGBColor = ()=>{
        const rgbArray:number[] = []
        for(let i=0;i<3;i++){
            rgbArray.push(Math.floor((Math.random()*99 + 1)))
        }
        setArrayRGB(rgbArray)
    }

    const generateColor = ()=>{
        if(isHex){
            generateHexColor()
        }
        else{
            generateRGBColor()
        }
    }

  return (
    <div>
        <button onClick={()=>{
            setisHex(true)
        }}>
            Hex Color
        </button>
        <button onClick={()=>{
            setisHex(false)
        }}>
            RGB Color
        </button>
        <button onClick={generateColor}>
            {`Generate ${isHex? "Hex" : "RGB"} Color`}
        </button>
        <div>
            {
                isHex? `#${hexNumberString}` : `rgb(${ArrayRGB[0]},${ArrayRGB[1]},${ArrayRGB[2]})`
            }
        </div>
        <div className="colorBox"
            style={isHex? {backgroundColor : `#${hexNumberString}`} : {backgroundColor : `rgb(${ArrayRGB[0]},${ArrayRGB[1]},${ArrayRGB[2]})`}}>

        </div>
    </div>
  )
}
// Code By Devanjoy Das
export default ColorGenerator