
import { useState } from "react"
import Data from "./Data"



const Accordion = () => {

    const [SingleMode, setSingleMode] = useState<boolean>(true)
    const [id, setid] = useState<number | null>()
    const [idArray, setidArray] = useState<number[]>([])

    const handleShowBody =(idOfAccordion : number)=>{
        // if SingleMode then change according to the id state
        if(SingleMode){
            setid(id===idOfAccordion? null : idOfAccordion)
            return ;
        }
        // if multi mode then change according to the idArray
        const tempArray = [...idArray]
        if(tempArray.includes(idOfAccordion)){
            tempArray.splice(tempArray.indexOf(idOfAccordion),1);
        }
        else{
            tempArray.push(idOfAccordion);
        }
        setidArray(tempArray)
    }

  return (
    <div>
        <button onClick={()=>{
            setSingleMode((prevValue : boolean)=>{
                setid(null);
                setidArray([])
                return !prevValue
            })
        }}>{SingleMode===true? "Single Mode" : "Multi Mode"}</button>
        <div>
            {
                Data && Data.length>0 ? Data.map((eachData)=>{
                    return (
                        <div key={eachData.id} onClick={()=>{
                                handleShowBody(eachData.id)
                        }}>
                            {eachData.Header}
                            {idArray.includes(eachData.id) || id===eachData.id? <div>{eachData.Body}</div> : ""}
                        </div>
                    )
                }) : null
            }
        </div>
    </div>
  )
}
// Code By Devanjoy Das , NIT MANIPUR 
export default Accordion