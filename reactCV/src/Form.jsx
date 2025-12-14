import PersonalDetails from "./PersonalDetails"
import Education from "./Education";
import { useState } from "react";

export default function Form({
    personalName,
    personalPhone,
    personalEmail,
    schoolName,
    degreeName,
    yearCompleted,
    changeFunction,
    submitFunction
}){
    
    
    return(
        <>
            <form onSubmit={submitFunction}>
                <PersonalDetails name={personalName} phone={personalPhone} email={personalEmail} changeFunction={changeFunction}/>
                <Education schoolName={schoolName} degreeName={degreeName} yearCompleted={yearCompleted} changeFunction={changeFunction}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}