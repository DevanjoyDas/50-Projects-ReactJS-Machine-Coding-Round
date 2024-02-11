import { useEffect, useState } from "react"

interface apiDatInterface{
    [key:string] : Array<{[key:string]:any}>
}

export const useFetchHook = (url:string, options={})=>{
    const [apiData,setApiData] = useState<apiDatInterface>()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const fetchData = async ()=>{
        setLoading(true);
        try{
            const response = await fetch(url,{...options});
            if(!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            setApiData(data)
            setLoading(false);
    
        }catch(error){
            console.log(error)
            setError(true)
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchData();
    },[url])

    
    return {apiData,loading,error}



}