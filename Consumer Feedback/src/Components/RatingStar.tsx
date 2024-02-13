import { useState } from "react"
import "./index.css"

const RatingStar = ({number_of_stars = 5}:{number_of_stars : number}) => {
    const [hoverId, sethoverId] = useState<number>(-1)
    const [selectedId, setselectedId] = useState<number>(-1)

  return (
    <div className="flexContainer">
        {
            [...Array(number_of_stars)].map((_,index:number)=>{
                return (
                    <div onMouseLeave={()=>{
                        sethoverId(-1)
                    }} onMouseEnter={()=>{
                        sethoverId(index)
                    }} onClick={()=>{
                        setselectedId(index)
                    }} className={`stars ${(index<=hoverId || index<=selectedId)? 'showColor' : ''}`}></div>
                )
            })
        }
    </div>
  )
}
// Code By Devanjoy Das
export default RatingStar