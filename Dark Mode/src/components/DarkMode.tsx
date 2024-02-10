import { useLocalStorage } from "../hooks/useLocalStorage"
import "./style.css"
const DarkMode = () => {
    const [mode,setMode] = useLocalStorage("Theme","Dark") 
    const toggleTheme = ()=>{
        setMode(mode==="Dark"?"Light":"Dark")
    }
  return (
    <div className="cont" data-theme={mode}>
        <button className="btnCont" onClick={toggleTheme}>
            {
                (mode==="Dark")? "Ligth Mode" : "Dark Mode"
            }
        </button>
        <div>
            {
                (mode==="Dark")? "This is Dark Mode" : "This is Light Mode"
            }
        </div>
    </div>
  )
}
// Code By Devanjoy Das
export default DarkMode