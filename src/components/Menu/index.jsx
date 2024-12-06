import { Link } from "react-router-dom";
import './style.css';
export const Menu = () => {
    return(
        <nav>
            <Link to='/' className="link">Home</Link>
            <Link to='/contact' className="link">Contact</Link>
        </nav>
    )
}