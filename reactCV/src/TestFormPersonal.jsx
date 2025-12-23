import { useState } from "react"

export default function TestFormPersonal({handleSubmit,name,phone,email,handleChange}){ 

    return(
        <div>
            <h2>Form for personal details</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" value={name} onChange={handleChange}/><br/>
                <label htmlFor="phone">Phone: </label>
                <input id="phone" name="phone" type="text" value={phone} onChange={handleChange}/><br/>
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" value={email} onChange={handleChange}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}