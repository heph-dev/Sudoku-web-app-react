import { useState } from "react";

function Cell({ cellId, num, row, col, selected, setSelected}) {
    let className = "cell";

    if (col === 2 || col === 5) {
        className += " right-border";
    }

    if (row === 2 || row === 5) {
        className += " bottom-border";
    }

    if(selected===cellId) {
        className += " clicked"
    }

    return (
        <div
            onClick={() => {
                        setSelected(cellId);
                    }
            }
            className={className}
        >
            {num}
        </div>
    );
}

export default Cell;