import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'

function App() {
  const [personalDetails,setPersonalDetails]=useState({
    name:"",
    phone:"",
    email:""
})

const handleSubmit=function(e){
    e.preventDefault();
    console.log("form submitted");
    console.log(personalDetails.name);
}

const handleChange=function(e){
    const name = e.target.name;
    const value = e.target.value;
    setPersonalDetails(values => ({...values, [name]: value}))
}

  return (
    <>
      <h1>Build a CV</h1>
      <Form personalName={personalDetails.name} personalPhone={personalDetails.phone} personalEmail={personalDetails.email} personalChange={handleChange} submitFunction={handleSubmit}/>
    </>
  )
}

export default App
