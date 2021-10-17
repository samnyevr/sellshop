import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"

export default function Navbar() {
    return (
        <ol>
            <Link to="/">
                <li className="Home">Home</li>
            </Link>
            <Link to='/browse'>
                <li className="Browse">Browse</li>
            </Link>
            <Link to=''>
                <li className="Shop">Shop</li>
            </Link>
            <Link to=''>
                <li className="Profile">Profile</li>
            </Link>
        </ol>
    )
}