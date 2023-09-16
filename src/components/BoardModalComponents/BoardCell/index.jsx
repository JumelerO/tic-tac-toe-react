/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { GameContext } from '../../App/context'
import { GameIcon } from '../../GameIcon'

function BoardCell({ cellNumber, typeIcon }) {

    const {  insertIcon, winner, winnerCells } = useContext(GameContext)

    return (
        <div className = {`h-20 w-20 p-2 cursor-pointer hover:bg-neutral-600 transition-colors duration-100 ${cellNumber === 4 && "border-solid border-2 border-black"} ${(cellNumber === 1 || cellNumber === 7) && "border-solid border-x-2 border-black"} ${(cellNumber === 3 || cellNumber === 5) && "border-solid border-y-2 border-black"} ${winnerCells.includes(cellNumber) && "bg-green-600 hover:bg-green-700"}`} onClick = {() => {!winner && insertIcon(cellNumber)}} >    
            <GameIcon typeIcon = { typeIcon } />
        </div>
    )
}

export { BoardCell }