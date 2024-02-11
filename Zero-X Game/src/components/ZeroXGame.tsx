import { useState } from "react"
import "./style.css"
const ZeroXGame = () => {
    const [Xturn, setXTurn] = useState<boolean>(true);
    const [inputArray, setInputArray] = useState<string[]>([])
    const [winner,setWinner] = useState<string>("");
    const [countTurnPlayed,setCountTurnPlayed] = useState<number>(0)
    const winningPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const checkWinner = (tempArray:string[])=>{
        for(let i =0;i<winningPositions.length;i++){
            const [pos1,pos2,pos3] = winningPositions[i]
            if(tempArray[pos1] && tempArray[pos1]===tempArray[pos2] && tempArray[pos1]===tempArray[pos3]){
                setWinner(tempArray[pos1])
            }
        }
    }

    const updateInputArray = (dataOfBox:string, indexOfBox:number) => {
        const tempArray = [...inputArray];
        tempArray[indexOfBox] = dataOfBox;
        setInputArray(tempArray)
        checkWinner(tempArray)
    }

    const handleUserClick = (e:React.MouseEvent<HTMLSpanElement,MouseEvent>, indexOfBox:number) => {
        const target = e.target as HTMLElement;
        if (target.innerText !== "" || winner!=="") return;
        setCountTurnPlayed((prev)=>{
            return (prev+1);
        })
        target.innerText = (Xturn ? "X" : "O");
        updateInputArray(target.innerText, indexOfBox)
        setXTurn(!Xturn)
    }

    return (
        <div>
            {
                [...Array(9)].map((_, index) => {
                    return (
                        <>
                            {(index !== 0 && index % 3 === 0) ? <div></div> : null}
                            <span onClick={(e) => {
                                handleUserClick(e, index)
                            }} className="squareBox"></span>
                        </>
                    )
                })
            }
            {
                (winner!=="" || countTurnPlayed===9)? (winner?<div>Winner is {winner}</div>:<div>Game Draw</div>)  : (<div>Current Turn : {(Xturn)?"X":"O"}</div>)
            }
            {/* <div><button onClick={()=>{
                setXTurn(true);
                setInputArray([])
                setWinner("")
                setCountTurnPlayed(0)

            }}>Reset Game</button></div> */}
            {/* Implement another version with Reset Game Button */}
        </div>
    )
}

export default ZeroXGame