//get user to input educational experience
import { useState } from "react"

export default function Education({schoolName,degreeName,yearCompleted,changeFunction}){
    return(
        <section>
            <h3>Educational Details</h3>
            <label htmlFor="schoolName">Name of Institution: </label>
            <input id="schoolName" name="schoolName" type="text" value={schoolName} onChange={changeFunction}/><br/>
            <label htmlFor="degree">Degree: </label>
            <input id="degree" name="degree" type="text" value={degreeName} onChange={changeFunction}/><br/>
            <label htmlFor="yearCompleted">Year of completion: </label>
            <input id="yearCompleted" name="yearCompleted" type="number"  value={yearCompleted} onChange={changeFunction}/><br/>
        </section>
    )
}