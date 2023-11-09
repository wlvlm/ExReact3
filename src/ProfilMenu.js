const profil =
{
    firstName: 'William',
    lastName: 'Vuillaume',
    work: 'WebDev'
}

function ProfilMenu(){
    return(
        <ul className="profile">
            <li>{profil.firstName}</li>
            <li>{profil.lastName}</li><br></br>
            <li>{profil.work}</li>
        </ul>
    )
}

export default ProfilMenu;