import React from "react";

const InputBox = ({ inputValue, onInputChange, onAdd }) => {
    return (
        <div className="input-Box">
            <input type="text" value={inputValue} onChange={onInputChange}/>
            <button className="addButton" onClick={onAdd}>추가</button>
        </div>
    )
}

export default InputBox