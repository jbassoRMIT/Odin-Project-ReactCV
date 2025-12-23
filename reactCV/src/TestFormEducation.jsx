import { useState } from "react"

export default function TestFormEducation({index,handleSubmit,schoolName,degree,yearCompleted,handleChange}){ 

    return(
        <div>
            <h2>Form for educational experience</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor={`schoolName${index}`}>Name of Institution: </label>
                <input id={`schoolName${index}`} name={`schoolName${index}`} type="text" value={schoolName} onChange={handleChange}/><br/>
                <label htmlFor={`degree${index}`}>Degree: </label>
                <input id={`degree${index}`} name={`degree${index}`} type="text" value={degree} onChange={handleChange}/><br/>
                <label htmlFor={`yearCompleted${index}`}>Year of completion: </label>
                <input id={`yearCompleted${index}`} name={`yearCompleted${index}`} type="number"  value={yearCompleted} onChange={handleChange}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}