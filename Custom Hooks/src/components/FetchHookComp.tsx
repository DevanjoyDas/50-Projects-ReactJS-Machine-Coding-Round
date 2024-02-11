
import { useFetchHook } from '../customeHooks/useFetchHook'

const FetchHookComp = () => {

    const {apiData,loading,error} = useFetchHook("https://dummyjson.com/users",{})
    
    if(loading){
        return(
            <div>Loading</div>
        )
    }

  return (
    <div>
        
        {
            (apiData && apiData.users && apiData.users.length>0)? (
                <div>
                    {
                        (apiData.users).map((eachUser,index)=>{
                            return(
                                <div key={index}>{eachUser.firstName}</div>
                            )
                        })
                    }
                </div>
            ):null
        }
        {
            error? <div>Error</div> : null
        }
    </div>
  )
}

export default FetchHookComp