import { useState } from "react";
import Genre from "../Pages/Genre";
function Dropdown(){
    const [value, setValue]=useState('')
    const options=[
        {lable: "Red", value:1},
        {lable: "Blue", value:2},
        {lable: "Yellow", value:3}
    ]
    function handleSelect(event){
        setValue(event.target.value)
    }
    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="w-50 p-3 border rounder">
                <select className="form-select" onChange={handleSelect}>
                    {options.map(option =>(
                        <option value={option.value}>{option.lable}</option>
                    ))}
                </select>
                <p>{value}</p>
            </div>
        </div>
    )
}