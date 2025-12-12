//get user to input personal details
import { useState } from "react"

export default function PersonalDetails(){
    const [inputs,setInputs]=useState({
        name:"",
        phone:"",
        email:""
    })

    const handleChange=function(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit=function(e){
        e.preventDefault();
        console.log("form submitted");
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" value={inputs.name} onChange={handleChange}/><br/>
                <label htmlFor="phone">Phone: </label>
                <input id="phone" name="phone" type="text" value={inputs.phone} onChange={handleChange}/><br/>
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" value={inputs.email} onChange={handleChange}/><br/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}