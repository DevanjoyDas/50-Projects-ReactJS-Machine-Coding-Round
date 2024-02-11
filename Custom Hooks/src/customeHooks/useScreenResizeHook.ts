import { useLayoutEffect, useState } from "react"

export const useScreenResizeHook = ()=>{
    const [heightOfScreen,setHeightOfScreen] = useState<number>(0);
    const [widthOfScreen,setWidthOfScreen] = useState<number>(0);

    const calculateValues = ()=>{
        setHeightOfScreen(window.innerHeight)
        setWidthOfScreen(window.innerWidth)
    }

    useLayoutEffect(() => {
      
        calculateValues();

        window.addEventListener("resize",calculateValues)
    
      return () => {
        window.removeEventListener("resize",calculateValues)
      };
    }, [])

    return {heightOfScreen,widthOfScreen}
}