/* eslint-disable react/prop-types */
import { useContext } from "react"
import { GameContext } from "../../App/context"

function PlayerTurn({ playerTurn }) {

    const { winner, isDraw } = useContext(GameContext)

    return(
         !winner && !isDraw ? <h2 className="text-center text-white font-bold">Turn of: <span className="text-xl text-purple-600">{ playerTurn }</span></h2> : winner && !isDraw ? <h2 className="text-white font-bold"> Winner: <span className="text-xl font-bold text-purple-600"> { winner } </span> </h2> : <h2 className="text-xl font-bold text-white">DRAW!</h2>
    )
}

export { PlayerTurn }