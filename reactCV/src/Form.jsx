import PersonalDetails from "./PersonalDetails"
import Education from "./Education";
import WorkExperience from "./workExperience";
import { useState } from "react";

export default function Form({
    personalName,
    personalPhone,
    personalEmail,
    schoolName,
    degreeName,
    yearCompleted,
    companyName,
    position,
    responsibilities,
    dateStart,
    dateFinish,
    changeFunction,
    submitFunction
}){
    
    
    return(
        <>
            <form onSubmit={submitFunction}>
                <PersonalDetails name={personalName} phone={personalPhone} email={personalEmail} changeFunction={changeFunction}/>
                <Education schoolName={schoolName} degreeName={degreeName} yearCompleted={yearCompleted} changeFunction={changeFunction}/>
                <WorkExperience companyName={companyName} position={position} responsibilities={responsibilities} dateStart={dateStart} dateFinish={dateFinish} changeFunction={changeFunction}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}