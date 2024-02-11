import { createContext,useContext, useEffect, useState } from "react";
import { fakeApiCallFunction } from "../components/customFlags/customApi";

interface apiDataInterface{
    [key:string]:boolean
}

type IAPI = {
    loading : boolean,
    apiData : apiDataInterface,
}

const INITIAL_STATE = {
    loading : false,
    apiData : {},
}


export const APIContext = createContext<IAPI>(INITIAL_STATE);

export const ApiContextProvider = ({ children }: { children: React.ReactNode })=>{
    const [loading,setLoading] = useState<boolean>(false);
    const [apiData,setApiData] = useState<apiDataInterface>({});

    const apiCallerFunction = async ()=>{
        setLoading(true)
        const dataFromApi = await fakeApiCallFunction();
        setApiData(dataFromApi)
        setLoading(false)
    }

    useEffect(()=>{
        apiCallerFunction()
    },[])

    return(
        <APIContext.Provider value={{loading,apiData}}>
            {children}
        </APIContext.Provider>
    )
}
export const useApiContext = ()=>useContext(APIContext)