import Cell from "./Cell.jsx"

function Board({board, setBoard}) {
    return (
        <div className="board">
            {board.map((row) => row.map((num) => <Cell num={num}></Cell>))}
        </div>
        
    )
}

export default Board