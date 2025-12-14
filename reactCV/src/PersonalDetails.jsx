//get user to input personal details
import { useState } from "react"

export default function PersonalDetails({name,phone,email,changeFunction}){

    
    
    return(
        <div>
            <section>
                <h3>Personal Details</h3>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" value={name} onChange={changeFunction}/><br/>
                <label htmlFor="phone">Phone: </label>
                <input id="phone" name="phone" type="text" value={phone} onChange={changeFunction}/><br/>
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" value={email} onChange={changeFunction}/><br/>
            </section>
        </div>
    )
}