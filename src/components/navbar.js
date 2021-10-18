import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"

export default function Navbar() {
    return (
        <ol className="Navbar">
            <Link to="/">
                <li className="Navbar Home"></li>
            </Link>
            <Link to='/browse'>
                <li className="Navbar Browse"></li>
            </Link>
            <Link to='/checkout'>
                <li className="Navbar Shop"></li>
            </Link>
            <Link to='/login'>
                <li className="Navbar Profile"></li>
            </Link>
        </ol>
    )
}