

function useLocalStorage([fPlayer, sPlayer],[fPlayerScore, sPlayerScore]) {

    // Data
    const players = `${fPlayer.trim()},${sPlayer.trim()}`

    // Funcionts
    const savePlayersScore = () => {
        try {
            let newScore = JSON.parse(localStorage.getItem(players))
            newScore.fplayer = fPlayerScore
            newScore.splayer = sPlayerScore
            localStorage.setItem(players, JSON.stringify(newScore))
        } catch(e) {
            console.log(e)
        }
    }
    
    const savePlayers = () => {
        if(localStorage.getItem(players) === null) localStorage.setItem(players, JSON.stringify({fplayer: 0, splayer: 0}))
    }

    const getPlayersInfo = () => {
        return JSON.parse(localStorage.getItem(players))
    }

    return {players, savePlayersScore, savePlayers, getPlayersInfo}
}

export { useLocalStorage }