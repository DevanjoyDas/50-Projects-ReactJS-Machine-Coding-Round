
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import DynamicPage from './pages/DynamicPage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/dynamic-page/:id' element={<DynamicPage/>}/>
      </Routes>
    </>
  )
}

export default App
