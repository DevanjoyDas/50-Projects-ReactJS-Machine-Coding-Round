type onChangeFunctionType = (index : number) => void
type dataArrayType = {
    Title : string,
    Paragraph : string | JSX.Element
}

const TabUtility = ({dataArray, onChangeFunction,indexOfTab} : {dataArray:dataArrayType[] , onChangeFunction:onChangeFunctionType, indexOfTab:number}) => {
  return (
    <div>
        {
            (dataArray && dataArray.length>0)? (
                dataArray.map((eachObject,index:number)=>{
                    return(
                        <button onClick={()=>{
                            onChangeFunction(index)
                        }}>{eachObject.Title}</button>
                    )
                })
            ) : null
        }
        <div>
            {dataArray[indexOfTab]? <div>{dataArray[indexOfTab].Paragraph}</div> : null} 
        </div>
    </div>
  )
}

export default TabUtility