import { useState } from "react";

function Cell({ num, row, col }) {
    let className = "cell";

    if (col === 2 || col === 5) {
        className += " right-border";
    }

    if (row === 2 || row === 5) {
        className += " bottom-border";
    }

    const [clicked, setClicked] = useState(false);

    return (
        <div
            onClick={() => setClicked(!clicked)}
            className={clicked ? className + " clicked" : className}
        >
            {num}
        </div>
    );
}

export default Cell;