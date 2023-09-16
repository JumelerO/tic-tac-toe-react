import { useContext } from "react"
import { GameContext } from "../../App/context"
import { GameIcon } from "../../GameIcon"


function ResetButton() {

    const { resetBoard, winner, setWinner , setNewTurn, setWinnerCells, setIsDraw, isDraw } = useContext(GameContext)

    return(
        <div className="flex justify-end items-end relative">
            <button className = "py-2 px-4 rounded-2xl bg-purple-700 grid place-items-center mt-6 font-bold hover:text-white transition-colors duration-200 select-none" onClick = { () => { 
                resetBoard()
                setNewTurn()
                setWinnerCells([])
                setIsDraw(false)
                setWinner('')
            }}> Reset Game </button>

            { (winner || isDraw) && <div className = "text-2xl mb-2 animate-indicate absolute -right-6"> <GameIcon typeIcon = 'arrowBack' /> </div> }
        </div>
    )
}

export { ResetButton }