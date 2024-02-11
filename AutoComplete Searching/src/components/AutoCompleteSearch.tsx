import { useEffect,useState } from "react"

const AutoCompleteSearch = () => {
    interface userObject{
        [key:string] : any
    }
    const [searchValue , setSearchValue] = useState<string>("")
    const [userDataNames,setUserDataNames] = useState<string[]>([])
    const [searchedData , setSearchedData] = useState<string[]>([])
    const [loading , setLoading] = useState<boolean>(false)

    const fetchData = async()=>{
        setLoading(true)
        const url = "https://dummyjson.com/users";
        const response = await fetch(url);
        const data = await response.json();
        const dataArray = (data.users).map((eachUser:userObject)=>{
            return(
                (eachUser.firstName).toLowerCase()
            )
        })
        setUserDataNames(dataArray)
        setLoading(false)
    }


    const handleInputOnChange = async (e:React.ChangeEvent<HTMLInputElement>)=>{
            const tempPlaceHolder = e.target.value.toLowerCase()
            setSearchValue(tempPlaceHolder)
            if(tempPlaceHolder!=="" && tempPlaceHolder.trim().length>0){
                setSearchedData(userDataNames.filter((eachName:string)=>{
                    return (eachName.includes(tempPlaceHolder.trim()))
                }))
            }
            else{
                setSearchedData([])
            }
    }

    const handleSelect = (e:React.MouseEvent<HTMLDivElement,MouseEvent>)=>{
        const target = e.target as HTMLElement
        setSearchedData([])
        setSearchValue(target.innerText);
    }


    useEffect(()=>{
        fetchData();
    },[])



  return (

    <div>
        {
            (loading)? <div>Loading</div> : <input type="text" value={searchValue} onChange={(e)=>{
                handleInputOnChange(e);
            }} />
        }
        {
            (searchedData && searchedData.length>0)? (
                searchedData.map((eachSuggestedValue:string,index:number)=>{
                    return(
                        <div key={index} onClick={handleSelect}>{eachSuggestedValue}</div>
                    )
                })
            ) : null
        }
    </div>
  )
}

export default AutoCompleteSearch