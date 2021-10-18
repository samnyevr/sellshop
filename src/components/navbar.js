import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"

export default function Navbar() {
    return (
        <ol>
            <Link to="/">
                <li className="Home"></li>
            </Link>
            <Link to='/browse'>
                <li className="Browse"></li>
            </Link>
            <Link to='/checkout'>
                <li className="Shop"></li>
            </Link>
            <Link to='/login'>
                <li className="Profile"></li>
            </Link>
        </ol>
    )
}