import { Link } from "react-router-dom";
import "../styles/Header.scss"
import logo from "../assets/LOGO.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo Kasa" className="logo"/>  
            <nav className="nav-list">
                <Link to ="/home">Accueil</Link>
                <Link to ="/about">A propos</Link>
            </nav>
        </header>
    );
}

export default Header;