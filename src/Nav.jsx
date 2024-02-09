import { Link } from "react-router-dom"
import "./css/Nav.css";

export default function Nav() {
    return (
      <nav id="nav-container">
        <Link to="/" id="logo-placeholder">Logo</Link>
        <ul id="nav-link-container">
          <li className="nav-link">
            About Us
          </li>
          <li className="nav-link">My Meal Plan</li>
          <li className="nav-link">
            <Link to={"recipes"} className="link">Recipes</Link>
          </li>
        </ul>
        <button id="signin-btn" className="btn">Sign in</button>
      </nav>
    );
}