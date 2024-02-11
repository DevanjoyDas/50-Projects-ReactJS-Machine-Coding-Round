import { useApiContext } from "../../contexts/ApiContext"
import Christmas from "../Christmas/Christmas"
import Diwali from "../Diwali/Diwali"
import Holi from "../Holi/Holi"

const CustomFlags = () => {

  const {loading,apiData} = useApiContext()

  const customFlags = [
    {
      Name:"Holi",
      Flag : <Holi/>
    },
    {
      Name:"Diwali",
      Flag : <Diwali/>
    },
    {
      Name:"Christmas",
      Flag : <Christmas/>
    }
  ]

  if(loading){
    return(
      <div>
        Loading
      </div>
    )
  }

  return (
    <div>
      {
        apiData? (
          customFlags.map((eachFlag,index)=>{
            return(
              <div key={index}>
              {apiData[(eachFlag.Name)]? eachFlag.Flag : null}
              </div>
            )
          })
        ):null
      }
    </div>
  )
}

export default CustomFlags