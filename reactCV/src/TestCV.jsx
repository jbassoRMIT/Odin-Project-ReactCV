import { useState } from "react";
import TestFormPersonal from "./TestFormPersonal";
import TestFormEducation from "./TestFormEducation";

export default function TestCV(){
    const [inputs,setInputs]=useState({
        name:"",
        phone:"",
        email:"",
        // schoolName0:"",
        // degree0:"",
        // yearCompleted0:"",
        // schoolName1:"",
        // degree1:"",
        // yearCompleted1:""
    })

    const [countEducation,setCountEducation]=useState(0);

    const handleChange=function(e){
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit=function(e){
        e.preventDefault();
        console.log("form submitted");
        console.log(inputs);
    }

    const handleClick=function(){
        setCountEducation(countEducation+1);
        console.log(countEducation)
        console.log(numEducations)
    }

    const numEducations=[];
    for(let i=0;i<countEducation;i++){
        numEducations.push(i);
    }

    const displayCV=function(){
        
        const inputKeys=Object.keys(inputs);

        return(
            <div>
                <h2>My CV</h2>
                <p>Ny name is: {inputs.name}</p>
                <p>Email: {inputs.email}</p>
                <p>Ny phone is: {inputs.phone}</p>
                {numEducations.map((education,index)=>{
                    return(
                        <div>
                            <h2>School {index+1} details</h2>
                            <ul>
                                <li>School name: {inputs[inputKeys[3*(index+1)]]}</li>
                                <li>Degree: {inputs[inputKeys[4*(index+1)]]}</li>
                                <li>Year Completed: {inputs[inputKeys[5]]}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }

    const displayEducations=function(){
        return numEducations.map((education,index)=>{
            return (
                <TestFormEducation
                    index={index}
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    schoolName={inputs.schoolName}
                    degree={inputs.degree}
                    yearCompleted={inputs.yearCompleted}
                />
            )
        })
    }

    return(
        <div>
            <div>
                <TestFormPersonal
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    name={inputs.name}
                    phone={inputs.phone}
                    email={inputs.email}
                />
                <button onClick={handleClick}>Add education</button>
                {displayEducations()}
            </div>
            <div>
                {displayCV()}
            </div>
        </div>
    )
}