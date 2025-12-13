import PersonalDetails from "./PersonalDetails"

export default function Form(){
    const handleSubmit=function(e){
        e.preventDefault();
        console.log("form submitted");
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <PersonalDetails/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}