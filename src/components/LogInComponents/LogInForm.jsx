import { useContext } from "react"
import { GameContext } from "../App/context"


function LogInForm() {

    const { FPlayerName, SPlayerName ,setFPlayerName, setSPlayerName, setIsLogInOpen, savePlayers,  setSPlayerScore, setFPlayerScore} = useContext(GameContext)

    return(
        <>
            <h2 className="text-5xl text-white ">Tic Tac Toe</h2>
            <form className="flex flex-col mt-12 text-center border-2 border-solid border-purple-600 rounded-lg px-8" onSubmit = { e => {
                e.preventDefault() 
                setIsLogInOpen(false)
                savePlayers()
                const playersNames = `${FPlayerName},${SPlayerName}`
                const playersInfo = JSON.parse(localStorage.getItem(playersNames))
                setFPlayerScore(playersInfo.fplayer)
                setSPlayerScore(playersInfo.splayer)
            } }>
                <p className="text-white text-2xl font-bold mb-8 mt-2">Log in</p>
                <input type="text" placeholder="First player name: X" className="bg-neutral-800 border-b-2 border-solid border-purple-600 px-2 py-2 outline-none text-white" required={true} onChange={e => setFPlayerName(e.target.value)}/>
                <input type="text" placeholder="Second player name: O" className="bg-neutral-800 border-b-2 border-solid border-purple-600 mt-4 px-2 py-2 outline-none text-white" required={true} onChange={e => setSPlayerName(e.target.value)}/>
                <button className="bg-purple-700 rounded-2xl w-6/12 py-2 self-end my-8 hover:bg-purple-800 hover:text-white font-bold active:text-black transition-colors duration-200 shadow-2xl">Log in</button>
            </form>
        </>
    )
}

export { LogInForm }