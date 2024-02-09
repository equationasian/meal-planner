import './css/App.css';
import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <Nav />
      <div id="tab">
        <Outlet />
      </div>
    </div>
  );
}