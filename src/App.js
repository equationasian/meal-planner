import './App.css';
import Nav from "./Nav.js";
import Recipe from './Recipe.js';

export default function App() {
  return (
    <div className="app-container">
      <Nav />
      <Recipe />
    </div>
  );
}