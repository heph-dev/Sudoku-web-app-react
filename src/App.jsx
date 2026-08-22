import { useState } from 'react'
import './App.css'
import Board from "./components/Board.jsx"
import NumberPad from './components/NumberPad.jsx'

function App() {
  const[board, setBoard] = useState( Array(9).fill(null).map(() => Array(9).fill(0)));
  const[chosennum, setChosennum] = useState(0);
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

  //console.log(selected);
  console.log(chosennum);
 
  return(
    <div className="app">
      <NumberPad setChosennum={setChosennum} selected={selected} updateCell={updateCell}></NumberPad>
      <Board board={board} setBoard={setBoard} chosennum={chosennum} selected={selected} setSelected={setSelected}></Board>
    </div>
    
  )
}

export default App
