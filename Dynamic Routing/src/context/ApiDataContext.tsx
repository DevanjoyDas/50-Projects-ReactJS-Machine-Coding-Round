import { useContext, createContext, useState, useEffect } from "react";

interface apiObjectType{
    [key:string] : string;
}

type ApiContextInterface={
apiData : apiObjectType[]
}

const Initial_Data ={
    apiData : []
}


const ApiDataContext = createContext<ApiContextInterface>(Initial_Data)

export const ApiDataContextProvider = ({children} : {children:React.ReactNode})=>{
    const [apiData,setApiData]= useState<apiObjectType[]>([])


    const fetchData = async  ()=>{
        const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=apple");
        const dataResponse = await response.json();
        setApiData(dataResponse.data.recipes)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <ApiDataContext.Provider value={{apiData}}>
            {children}
        </ApiDataContext.Provider>    
    )
}
export const useApiDataContext = ()=>useContext(ApiDataContext);