import Cell from "./Cell.jsx"
import { useState } from "react";

function Board({board, setBoard}) {
    const [selected, setSelected] = useState("");

    return (
        <div className="board">
            {board.map((row, rowIndex) =>
                row.map((num, colIndex) => (
                    <Cell
                        cellId={`${rowIndex}${colIndex}`}
                        num={num}
                        row={rowIndex}
                        col={colIndex}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))
            )}
        </div>
        
    )
}

export default Board