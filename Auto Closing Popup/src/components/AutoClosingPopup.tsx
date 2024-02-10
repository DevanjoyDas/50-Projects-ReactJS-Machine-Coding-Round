import { useState } from 'react'
import Popup from './Popup'

const AutoClosingPopup = () => {

    const [toShowPopup, setToShowPopup] = useState<boolean>(false)

    const [timeOutID, setTimeOutID] = useState<number|undefined>()

    const handleShowPopup = ()=>{
        setToShowPopup(true);
        setTimeOutID(setTimeout(() => {
            setToShowPopup(false)
        },5000));
    }
    const handleClosePopup = ()=>{
        setToShowPopup(false);
        clearTimeout(timeOutID)
    }



  return (
    <div>
        <button onClick={handleShowPopup}>Show Popup</button>
        {
            toShowPopup && <Popup showFunction={handleClosePopup}/>
        }
    </div>
  )
}

export default AutoClosingPopup