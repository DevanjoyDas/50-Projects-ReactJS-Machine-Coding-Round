import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type speceficDetailsType ={
  [key:string] : string | number
}

const DynamicPage = () => {

  const {id} = useParams()

  const [speceficDetails,setSpeceficDetails] = useState<speceficDetailsType[]>([])


  useEffect(()=>{
    async function fetchSpeceficDetails(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const Data = await response.json();
      setSpeceficDetails(Data.data.recipe.ingredients);
    }

    fetchSpeceficDetails()
  },[id])

  return (
    <div>
      {
        (speceficDetails && speceficDetails.length>0)? (
          speceficDetails.map((eachIngredientObject,index)=>{
            return(
              <div key={index}>{eachIngredientObject.description}</div>
            )
          })
        ):null
      }
    </div>
  )
}

export default DynamicPage