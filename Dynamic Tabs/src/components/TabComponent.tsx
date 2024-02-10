import { useState } from "react"
import Data from "./Data"
import TabUtility from "./TabUtility"

const TabComponent = () => {

    const [indexOfTab, setindexOfTab] = useState<number | null>(null)
    const handleOnChange = (currentIndex : number)=>{
        setindexOfTab(currentIndex)
    }

  return (
    <TabUtility dataArray ={Data} onChangeFunction={handleOnChange} indexOfTab={indexOfTab!}/>
  )
}

export default TabComponent