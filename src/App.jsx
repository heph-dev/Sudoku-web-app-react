import { useState } from 'react'
import './App.css'
import Board from "./components/Board.jsx"
import NumberPad from './components/NumberPad.jsx'
import {getValidGrid} from "./logic/generator.js"
import createPuzzle from './logic/makePuzzle.js'

function App() {
  let grid = Array.from({ length: 9 }, () => Array(9).fill(0));
  getValidGrid(grid);
    
  const clues = 50;  // default is 30
  const missing_spaces = 81 - clues;  // Amount of missing spaces on grid
  let puzzle_grid = createPuzzle(grid, missing_spaces);
  
  const[board, setBoard] = useState(puzzle_grid);

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
