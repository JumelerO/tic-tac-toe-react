/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom'
import { GameContext } from "../../App/context"
import { useContext } from "react"

function GameScoreModal({ children }) {

    const { setIsScoreOpen } = useContext(GameContext)

    return createPortal(
        <div className="flex justify-center items-center flex-col absolute h-full w-full top-0 bottom-0 left-0 right-0 bg-pop p-24" onClick={() => setIsScoreOpen(false)}>
            { children }
        </div>,
        document.getElementById('score-modal')
    )
} 

export { GameScoreModal }