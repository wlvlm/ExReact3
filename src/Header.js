import ProfilMenu from './ProfilMenu';

function Header(){
    return (
        <div>
            <nav className="nav">
                <h1 className="title">le super blog</h1>
                    <ul className="menu">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Parcourir</a></li>
                        <li className="accountContainer"><a href="#" className="account">Mon compte</a>
                            <div className="accountInfo">
                                <ProfilMenu />
                            </div>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header;