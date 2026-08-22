
function NumberPad({selected, setSelected, updateCell}) {
    const nums = [1,2,3,4,5,6,7,8,9]
    return (
        <div id="number-pad" >
            {nums.map((num) => <div className="number-pad-num" 
            onClick={() => {
                            if(selected != "") {
                                updateCell(parseInt(selected[0]), parseInt(selected[1]), num);
                                setSelected("");
                            }
                        }
                    }>{num}</div>)}
        </div>
    )
}

export default NumberPad;