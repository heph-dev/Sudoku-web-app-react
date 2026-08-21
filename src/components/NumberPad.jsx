
function NumberPad() {
    const nums = [1,2,3,4,5,6,7,8,9]
    return (
        <div id="number-pad">
            {nums.map((num) => <div className="number-pad-num">{num}</div>)}
        </div>
    )
}

export default NumberPad;