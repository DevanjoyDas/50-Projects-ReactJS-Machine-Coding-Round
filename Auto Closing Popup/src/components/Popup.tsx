
const Popup = ({showFunction}:{showFunction:()=>void}) => {
  return (
    <div>
        <div>
            Hello How are You (Close it Manually or It will get closed after 5 seconds)
        </div>
        <button onClick={showFunction}>Close Popup</button>
    </div>
  )
}

export default Popup