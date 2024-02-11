import { useRef, useState } from "react"
import { useOutsideClick } from "../customeHooks/useOutsideClick"


const OutsideClickComp = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [showModal,setShowModal] = useState(false)
    const onClickFunction = ()=>{
        setShowModal(false)
    }
    useOutsideClick(ref,onClickFunction)

  return (
    <div>
        {
            (showModal)? (
                <div ref={ref}>Click Outside of the Box to Close this Modal</div>
            ) : (
                <button onClick={()=>{
                    setShowModal(true)
                }}>Show Modal</button>
            )
        }
    </div>
  )
}

export default OutsideClickComp