import { LoginCard } from '../LoginCard'
import { LoginForm } from '../LoginForm'
import { FPlayerInpt } from '../FPlayerInpt'
import { SPlayerInpt } from '../SPlayerInpt'
import { LoginButton } from '../LoginButton'
import { BoardTitle } from '../BoardTitle'
import { Board } from '../Board'
import { BoardCell } from '../BoardCell'
 
function AppUI() {
    return(
        <>
            <LoginCard>
                <LoginForm>
                    <FPlayerInpt />
                    <SPlayerInpt />
                    <LoginButton />
                </LoginForm>
            </LoginCard>
            <BoardTitle />
            <Board>
                <BoardCell />
            </Board>
        </>
    )
}

export { AppUI }