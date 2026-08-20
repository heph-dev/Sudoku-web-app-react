import { useState } from 'react'
import './App.css'
import Board from "./components/Board.jsx"

function App() {
  const[board, setBoard] = useState( Array(9).fill(null).map(() => Array(9).fill(0)))

  return(
    <Board board={board} setBoard={setBoard}></Board>
  )
}

export default App
