export default function PersonalDetailsDisplay({name,phone,email}){
    return(
        <>
            <h2>Personal Details</h2>
            <p>Ny name is {name}, my phone number is {phone} and email {email}</p>
        </>
    )
}