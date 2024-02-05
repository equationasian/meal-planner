import "./Nav.css";

export default function Nav() {
    return (
      <nav id="nav-container">
        <span id="logo-placeholder">logo</span>
        <ul id="nav-link-container">
          <li className="nav-link">
            About Us
          </li>
          <li className="nav-link">My Meal Plan</li>
          <li className="nav-link">Recipes</li>
        </ul>
        <button id="signin-btn" className="btn">Sign in</button>
      </nav>
    );
}