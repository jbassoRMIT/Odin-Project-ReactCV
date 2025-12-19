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
    const [addSchool,setAddSchool]=useState(0);
    const [addWork,setAddWork]=useState(0);
    
    const handleClickEducation=function(e){
        e.preventDefault();
        console.log("button is responsive");
        setAddSchool(addSchool+1);
        console.log(addSchool); 
    }

    const handleClickWork=function(e){
        e.preventDefault();
        console.log("button is responsive");
        setAddWork(addWork+1);
        console.log(addWork); 
    }

    const numSchools=[];
    for(let i=0;i<addSchool;i++){
        numSchools.push(i);
    }

    const numJobs=[];
    for(let i=0;i<addWork;i++){
        numJobs.push(i);
    }

    const educationInput=function(){
        return(
            <div>
                <Education schoolName={schoolName} degreeName={degreeName} yearCompleted={yearCompleted} changeFunction={changeFunction}/>
            </div>
        )
    }

    const workInput=function(index){
        return(
            <div>
                <WorkExperience index={index} companyName={companyName} position={position} responsibilities={responsibilities} dateStart={dateStart} dateFinish={dateFinish} changeFunction={changeFunction}/>
            </div>
        )
    }
        
    return(
        <>
            <form onSubmit={submitFunction}>
                <PersonalDetails name={personalName} phone={personalPhone} email={personalEmail} changeFunction={changeFunction}/>
                <button onClick={handleClickEducation}>Add Educational experience</button>
                { numSchools.map((number)=>{
                    return educationInput()
                })}
                <button onClick={handleClickWork}>Add work experience</button>
                {numJobs.map((number)=>{
                    return workInput(number)
                })}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}