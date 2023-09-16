import { GameContext } from '../../App/context'
import { GameIcon } from '../../GameIcon'
import { useContext } from 'react'

function BoardActions() {

    const { setIsScoreOpen, isScoreOpen, setIsLogInOpen, setFPlayerScore, setSPlayerScore, setWinner, setWinnerCells, setIsDraw, resetBoard, setNewTurn } = useContext(GameContext)

    return(
        <div className="h-fit w-screen flex py-px px-4 justify-space-between mb-4 max-w-2xl">
            <div className="h-fit w-fit flex cursor-pointer mr-auto group" onClick = {() => {
                setIsLogInOpen(true)
                setWinner('')
                setIsDraw(false)
                resetBoard()
                setNewTurn()
                setWinnerCells([])
            }}>
                <GameIcon 
                    typeIcon = "arrowBack"
                />
                <p className='text-white text-xl font-bold group-hover:text-neutral-500 transition-colors duration-200'>Log out</p>
            </div>
            <div className="h-fit w-fit cursor-pointer text-4xl ml-auto" onClick = {() => isScoreOpen ? setIsScoreOpen(false) : setIsScoreOpen(true)}>
                <GameIcon 
                    typeIcon = "history"
                />
            </div>
        </div>
    )
}

export { BoardActions }