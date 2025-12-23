import { useState } from 'react'
import './App.css'
import Form from './Form'

import CVDisplay from './CVDisplay'
import TestForm from './TestFormPersonal';
import TestCV from './TestCV';

function App() {
  const [submitted,setSubmitted]=useState(false);
  const [className,setClassName]=useState("content")
  
  const [inputs,setInputs]=useState({
    name:"",
    phone:"",
    email:"",
    schoolName:"",
    degree:"",
    yearCompleted:"",
    companyName:"",
    position:"",
    responsibilities:"",
    dateStart:"",
    dateFinish:""
})

const handleChange=function(e){
  const name=e.target.name;
  const value=e.target.value;
  setInputs(values => ({...values, [name]: value}))
}

const handleSubmit=function(e){
    e.preventDefault();
    console.log("form submitted");
    console.log(inputs);
    setSubmitted(true);
    setClassName("content submitted")
}

const submittedSection=function(){
  if(submitted){
    return(
      <div className='CVDisplay' >
        <CVDisplay 
          name={inputs.name} 
          phone={inputs.phone} 
          email={inputs.email} 
          schoolName={inputs.schoolName}
          degree={inputs.degree}
          yearCompleted={inputs.yearCompleted}
          companyName={inputs.companyName}
          position={inputs.position}
          responsibilities={inputs.responsibilities}
          dateStart={inputs.dateStart}
          dateFinish={inputs.dateFinish}
        />
      </div>
    )
  }
  else{
    return null;
  }
}

  return (
    <>
      {/* <div className={className}>
        <div className='enterDetails'>
          <h1>Build a CV</h1>
          <Form
            personalName={inputs.name}
            personalPhone={inputs.phone}
            personalEmail={inputs.email}
            schoolName={inputs.schoolName}
            degreeName={inputs.degree}
            yearCompleted={inputs.yearCompleted}
            companyName={inputs.companyName}
            position={inputs.position}
            responsibilities={inputs.responsibilities}
            dateStart={inputs.dateStart}
            dateFinish={inputs.dateFinish}
            changeFunction={handleChange}
            submitFunction={handleSubmit}
          />
        </div>
        {submittedSection()}
      </div> */}
      <TestCV/>
        

      
    </>
  )
}

export default App
