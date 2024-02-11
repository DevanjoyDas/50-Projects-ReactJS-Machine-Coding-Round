import { useEffect } from "react"

export const useOutsideClick = (reference:React.RefObject<HTMLDivElement>,onClickFunction:()=>void)=>{
    useEffect(()=>{

        const eventHandler = (event:Event)=>{
            if(!reference.current || reference.current.contains(event.target as Node)){
                return;
            }

            onClickFunction();
        }

        window.addEventListener("mousedown",eventHandler);
        window.addEventListener("touchstart",eventHandler)


        return ()=>{
            window.removeEventListener("mousedown",eventHandler);
            window.removeEventListener("touchstart",eventHandler)
        }

    },[reference,onClickFunction])
}