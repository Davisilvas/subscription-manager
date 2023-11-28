import React from 'react'
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="group-one">
                <span className="logo-link">Dummy</span>
            </div>
            <div className="group-two">
                <span className="notification">Bell</span>
                <span className="settings">Settings</span>
                <span className="logout">Logout</span>
            </div>
        </nav>
    )
}

export default Navbar