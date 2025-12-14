import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Education from './Education'

function App() {
  const [inputs,setInputs]=useState({
    name:"",
    phone:"",
    email:"",
    schoolName:"",
    degree:"",
    yearCompleted:""
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
}

  return (
    <>
      <h1>Build a CV</h1>
      <Form 
        personalName={inputs.name} 
        personalPhone={inputs.phone} 
        personalEmail={inputs.email} 
        schoolName={inputs.schoolName}
        degreeName={inputs.degree}
        yearCompleted={inputs.yearCompleted}
        changeFunction={handleChange} 
        submitFunction={handleSubmit}
      />
    </>
  )
}

export default App
