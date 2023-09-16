import { BoardTitle } from '../BoardModalComponents/BoardTitle'
import { Board } from '../BoardModalComponents/Board'
import { BoardModal } from './modals/BoardModal'
import { BoardActions } from '../BoardModalComponents/BoardActions'
import { PlayerTurn } from '../BoardModalComponents/PlayerTurn'
import { useContext } from 'react'
import { GameContext } from './context'
import { BoardCell } from '../BoardModalComponents/BoardCell'
import { ResetButton } from '../BoardModalComponents/ResetButton'
import { GameScoreModal } from './modals/GameScoreModal'
import { GameScoreActions } from '../GameScoreModalComponents/GameScoreActions'
import { GameScore } from '../GameScoreModalComponents/GameScore'
import { LogInModal } from './modals/LogInModal'
import { LogInForm } from '../LogInComponents/LogInForm'

function AppUI() {

    const { playerTurn, board, isScoreOpen, isLogInOpen } = useContext(GameContext)

    return(
        <>
            {isLogInOpen && <LogInModal>
                    <LogInForm />
                </LogInModal>}
            { (isScoreOpen && !isLogInOpen) && <GameScoreModal>
                                <div className='border-2 border-solid border-purple-600 rounded-lg w-72 h-68 backdrop-blur-xl'>
                                    <GameScoreActions />
                                    <GameScore />
                                </div>
                            </GameScoreModal>}
                            
            { !isLogInOpen && <BoardModal>
                <BoardActions />
                <BoardTitle />
                <PlayerTurn playerTurn = { playerTurn }/>
                <Board>
                    {board.map((icon, idx) => (
                        <BoardCell 
                            key = { idx }
                            typeIcon = { icon }
                            cellNumber = { idx }
                        />
                    ))}
                </Board>
                <ResetButton />
            </BoardModal>}
        </>
    )
}

export { AppUI }