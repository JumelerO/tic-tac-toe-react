import { useContext } from "react"
import { GameContext } from "../../App/context"


function GameScore() {

    const { FPlayerScore, SPlayerScore, setFPlayerScore, setSPlayerScore,  FPlayerName, SPlayerName, resetBoard, savePlayersScore} = useContext(GameContext)

    return(
        <div className="h-1/2 w-full grid place-items-center">
            <h2 className="text-2xl font-bold text-white mb-6">Points</h2>
            <div className="grid grid-rows-2 grid-cols-2 h-full place-items-center w-8/12 gap-x-4">
                <h2 className="text-xl text-white"> { FPlayerName }: <span className="font-bold">X</span></h2>
                <h2 className="text-xl text-white"> { SPlayerName }: <span className="font-bold">O</span></h2>
                <div className="text-white font-bold text-2xl"><p>{ FPlayerScore }</p></div>
                <div className="text-white font-bold text-2xl"><p>{ SPlayerScore }</p></div>
            </div>
            <button className = "bg-purple-700 rounded-2xl w-6/12 py-2 self-end my-8 hover:bg-purple-800 hover:text-white font-bold active:text-black transition-colors duration-200 shadow-2xl" onClick = {() => {
                setFPlayerScore(0)
                setSPlayerScore(0)
                resetBoard()
                savePlayersScore()
            }}>Reset Points</button>
        </div>
    )
}

export { GameScore }