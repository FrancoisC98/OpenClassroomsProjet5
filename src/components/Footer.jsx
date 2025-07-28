import "../styles/Footer.scss"
import logo from "../assets/LOGO.png"

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-cotent">
            <img src={logo} alt="Logo Kasa" className="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;