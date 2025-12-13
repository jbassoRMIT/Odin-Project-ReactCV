import PersonalDetails from "./PersonalDetails"
import { useState } from "react";

export default function Form({personalName,personalPhone,personalEmail,personalChange,submitFunction}){
    
    
    return(
        <>
            <form onSubmit={submitFunction}>
                <PersonalDetails name={personalName} phone={personalPhone} email={personalEmail} changeFunction={personalChange}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}