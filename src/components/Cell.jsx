function Cell({ key, num, row, col }) {
    let className = "cell";

    if (col === 2 || col === 5) {
        className += " right-border";
    }

    if (row === 2 || row === 5) {
        className += " bottom-border";
    }

    return (
        <div className={className}>
            {num}
        </div>
    );
}

export default Cell;