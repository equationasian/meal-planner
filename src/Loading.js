import "./Loading.css";
import { useState } from "react";

function Sticker() {
    return <img id="sticker" src="/img/catering.gif" alt="catering"></img>;
}

function LoadingText() {
    const [dots, setDots] = useState("");
    const showDots = () => dots.length < 3 ? setDots(dots + ".") : setDots("");
    setTimeout(showDots, 1000);
    return <p className="loading-text">Loading{dots}</p>;
}

export default function Loading() {
    return (
        <div className="loading-container">
            <Sticker />
            <LoadingText />
        </div>
    );
}