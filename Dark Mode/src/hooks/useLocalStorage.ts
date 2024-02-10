import { useEffect, useState } from "react";

export const useLocalStorage = (key:string,defaultValue:unknown)=>{
    const [value, setvalue] = useState(()=>{
        return (JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue)));
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setvalue];
}