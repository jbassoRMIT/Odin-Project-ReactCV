import { useState } from "react"

export default function AddEducationButton(){
    const [displayMore,setDisplayMore]=useState(false);
    
    const handleClick=function(){
        setDisplayMore(true);
    }
    
    return(
        <button onClick={handleClick}>Add education</button>
    )
}