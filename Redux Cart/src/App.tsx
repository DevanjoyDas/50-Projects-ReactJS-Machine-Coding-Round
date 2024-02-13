
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import {Routes,Route, Link} from "react-router-dom"

function App() {

  return (
    <>
    <div>
      <Link to={"/"}>
        Home
      </Link>
      {" "}
      <Link to={"/cart"}>
        Cart
      </Link>
    </div>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </>
  )
}

export default App
