import { AppUI } from './AppUI'
import { GameContextProvider } from './context'

function App() {

  return (
    <>
      <GameContextProvider>
        <AppUI />
      </GameContextProvider>
    </>
  )
}

export default App
