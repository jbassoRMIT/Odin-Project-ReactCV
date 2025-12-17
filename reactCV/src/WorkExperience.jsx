//get user to input educational experience
import { useState } from "react"

export default function WorkExperience({companyName,position,responsibilities,dateStart,dateFinish,changeFunction}){
    return(
        <div className="formSection">
            <section>
                <h3>Work Experience</h3>
                <label htmlFor="companyName">Name of company: </label>
                <input id="companyName" name="companyName" type="text" value={companyName} onChange={changeFunction}/><br/>
                <label htmlFor="position">position: </label>
                <input id="position" name="position" type="text" value={position} onChange={changeFunction}/><br/>
                <label htmlFor="responsibilities">Responsibilities: </label>
                <input id="responsibilities" name="responsibilities" type="text"  value={responsibilities} onChange={changeFunction}/><br/>
                <label htmlFor="dateStart">Date started: </label>
                <input id="dateStart" name="dateStart" type="date"  value={dateStart} onChange={changeFunction}/><br/>
                <label htmlFor="dateFinish">Date finished: </label>
                <input id="dateFinish" name="dateFinish" type="date"  value={dateFinish} onChange={changeFunction}/><br/>
            </section>
        </div>
    )
}