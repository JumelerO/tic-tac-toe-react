/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from '../hooks/useLocaleStorage'

const GameContext = createContext()

function GameContextProvider({ children }) {

    const defaultBoard = Array(9).fill('')

    let turn = Math.floor(Math.random()*2)
    turn === 0 ? turn = 'X' : turn = 'O'

    // States
    const [board, setBoard] = useState(defaultBoard)
    const [playerTurn, setPlayerTurn] = useState(turn)
    const [winner, setWinner] = useState('')
    const [isDraw, setIsDraw] = useState(false)
    const [winnerCells, setWinnerCells] = useState([])
    const [isScoreOpen, setIsScoreOpen] = useState(false)
    const [FPlayerScore, setFPlayerScore] = useState(0)
    const [SPlayerScore, setSPlayerScore] = useState(0)
    const [FPlayerName, setFPlayerName] = useState('')
    const [SPlayerName, setSPlayerName] = useState('')
    const [isLogInOpen, setIsLogInOpen] = useState(true)


    // Customs Hooks
    const { players, savePlayersScore, savePlayers, getPlayersInfo } = useLocalStorage([FPlayerName, SPlayerName],[FPlayerScore, SPlayerScore])
     
    // Functions

    const setNewTurn = () => {
        let turn = Math.floor(Math.random()*2)
        turn === 0 ? setPlayerTurn('X') : setPlayerTurn('O')
    }

    const toggleTurn = () => playerTurn === 'X' ? setPlayerTurn('O') : setPlayerTurn('X')
    
    const insertIcon = idx => {
        const newBoard = [...board]
        if(newBoard[idx] === '') {
            newBoard[idx] = playerTurn
            setBoard(newBoard)
            toggleTurn()
        } 
    }

    const resetBoard = () => {
        setBoard(Array(9).fill(''))
    }

    const checkWinner = () => {
        if(board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
            setWinnerCells([0,1,2])
            return board[0]
        } else if(board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
            setWinnerCells([3,4,5])
            return board[3]
        } else if(board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
            setWinnerCells([6,7,8])
            return board[6]
        } else if(board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
            setWinnerCells([0,3,6])
            return board[0]
        } else if(board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
            setWinnerCells([1,4,7])
            return board[1]
        } else if(board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
            setWinnerCells([2,5,8])
            return board[2]
        } else if(board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
            setWinnerCells([0,4,8])
            return board[0]
        } else if(board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
            setWinnerCells([2,4,6])
            return board[2]
        } else {
            return ''
        }
    }

    const checkDraw = () => {
        if(board.includes('')) return false
        return true 
    }

    useEffect(() => {
        let winner = checkWinner()
        let isDraw = checkDraw()
        if(winner) setWinner(winner)
        if(isDraw && !winner) setIsDraw(true)
    }, [board])

    useEffect(() => {
        if(winner === 'X') setFPlayerScore(score => score + 1)
        else if(winner === 'O') setSPlayerScore(score => score + 1)
    }, [winner])

    useEffect(() => {
        savePlayersScore()
    }, [FPlayerScore, SPlayerScore])

    return (
        <GameContext.Provider value={{
            board,
            playerTurn,
            winner,
            winnerCells,
            isDraw,
            isScoreOpen,
            FPlayerScore,
            SPlayerScore,
            FPlayerName,
            SPlayerName,
            isLogInOpen,
            setIsLogInOpen,
            setFPlayerName,
            setSPlayerName,
            setFPlayerScore,
            setSPlayerScore,
            setBoard,
            setPlayerTurn,
            toggleTurn,
            insertIcon,
            resetBoard,
            setWinner,
            setWinnerCells,
            setNewTurn,
            setIsDraw,
            setIsScoreOpen,
            players, 
            savePlayersScore, 
            savePlayers
        }} >
            {children}
        </GameContext.Provider>
    )
}

export  { GameContext, GameContextProvider }

