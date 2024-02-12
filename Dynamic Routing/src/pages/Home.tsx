
import { useApiDataContext } from '../context/ApiDataContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const {apiData} = useApiDataContext()
  return (
    <div>
      {
        (apiData && apiData.length>0)?(
          apiData.map((eachFood)=>{
            return(
              <Link key={eachFood.id} to={`/dynamic-page/${eachFood.id}`}>
              <img src={`${eachFood.image_url}`} alt="pic" />
              </Link>
            )
          })
        ):null
      }
    </div>
  )
}

export default Home