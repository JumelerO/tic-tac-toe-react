import { useContext } from "react"
import { GameIcon } from "../../GameIcon"
import { GameContext } from "../../App/context"


function GameScoreActions() {

    const { setIsScoreOpen } = useContext(GameContext)

    return(
        <div className="h-1/12 w-full" onClick={ () => setIsScoreOpen(false)}>
            <div className="w-1/6 h-fit cursor-pointer mt-2 ml-2">
                <GameIcon typeIcon = 'arrowBack' />
            </div>
        </div>
    )
}

export { GameScoreActions }