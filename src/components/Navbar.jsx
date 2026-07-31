import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <h2>portfolio pro</h2>
            <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/equipe">Equipe</Link></li>
                <li><Link to="/projets">projets</Link></li>
                <li><Link to="/contact">contact</Link></li>

            </ul>
        </nav>
    );
}
export default Navbar;