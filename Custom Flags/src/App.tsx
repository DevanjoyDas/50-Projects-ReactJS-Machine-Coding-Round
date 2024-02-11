
import './App.css'
import CustomFlags from './components/customFlags/CustomFlags'
import { ApiContextProvider } from './contexts/ApiContext'

function App() {

  return (
    <ApiContextProvider>
      <CustomFlags/>
    </ApiContextProvider>
  )
}

export default App
