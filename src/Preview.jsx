import "./css/Preview.css";
import { Link } from "react-router-dom";

export default function Preview({ recipeName, recipeThumbnail }) {
    const recipeLink = recipeName.replaceAll(" ", "_");

    return (
        <Link to={`/recipes/${recipeLink}`} className="preview-link">
            <div className="preview-container">
                <div className="preview-thumbnail-container">
                    <img 
                        src={recipeThumbnail} 
                        alt={recipeName}
                        id="preview-thumbnail"
                    >
                    </img>
                </div>
                <div className="preview-info">
                    <span className="recipe-name">{recipeName}</span>
                </div>
            </div>
        </Link>
    );
}