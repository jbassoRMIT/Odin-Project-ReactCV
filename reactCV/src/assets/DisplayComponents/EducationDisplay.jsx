export default function EducationDisplay({school,degree,yearCompleted}){
    return(
        <>
            <h2>Education details</h2>
            <p>I attended {school} to study {degree}, which I completed in {yearCompleted}</p>
        </>
    )
}