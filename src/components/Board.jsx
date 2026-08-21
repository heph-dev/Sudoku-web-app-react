import Cell from "./Cell.jsx"

function Board({board, setBoard}) {
    return (
        <div className="board">
            {board.map((row, rowIndex) =>
                row.map((num, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        num={num}
                        row={rowIndex}
                        col={colIndex}
                    />
                ))
            )}
        </div>
        
    )
}

export default Board