
import './App.css'
import Data from './components/Data'
import RecursiveNavigationMenu from './components/RecursiveNavigationMenu'
function App() {

  return (
    <>
      <RecursiveNavigationMenu details={Data}/>
    </>
  )
}

export default App
