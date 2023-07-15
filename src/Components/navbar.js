import React from "react";
import '../Components/navbar.css';
export default function Navbar(probs) {
    return (
        <nav className="nav">
            <ul>
                <li><a href="/">{probs.title}</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}