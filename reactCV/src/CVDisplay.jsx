import EducationDisplay from "./assets/DisplayComponents/EducationDisplay";
import PersonalDetailsDisplay from "./assets/DisplayComponents/PersonalDetailsDisplay";

//this component takes all the details from cv input and displays them
export default function CVDisplay({
    name,
    phone,
    email,
    schoolName,
    degree,
    yearCompleted,
    companyName,
    position,
    responsibilities,
    dateStart,
    dateFinish
}){
    return(
        <div>
            <h2>Hello world</h2>
            <PersonalDetailsDisplay name={name} phone={phone} email={email}/>
            <EducationDisplay school={schoolName} degree={degree} yearCompleted={yearCompleted}/>
            <h3>Work Experience</h3>
            <p>
                I worked for {companyName} as a {position}. Key duties included: {responsibilities}.<br/> 
                I worked there from {dateStart} to {dateFinish}
            </p>
        </div>
    )
}