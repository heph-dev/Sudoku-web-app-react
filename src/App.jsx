import { useState } from 'react'
import './App.css'
import Board from "./components/Board.jsx"
import NumberPad from './components/NumberPad.jsx'

function App() {
  const[board, setBoard] = useState( Array(9).fill(null).map(() => Array(9).fill(0)));
  const[selected, setSelected] = useState("");

  function updateCell(row, col, num) {
      setBoard(
        board.map((rowArray, rowIndex) =>
            rowIndex === row
                ? rowArray.map((value, colIndex) =>
                    colIndex === col ? num : value
                )
                : rowArray
        )
    );
  }
 
  return(
    <div className="app">
      <NumberPad selected={selected} setSelected={setSelected} updateCell={updateCell}></NumberPad>
      <Board board={board} setBoard={setBoard} selected={selected} setSelected={setSelected}></Board>
    </div>
    
  )
}

export default App
