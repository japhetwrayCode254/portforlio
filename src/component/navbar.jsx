import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <span className='logo-text1'>Japhet</span>
            <span className='logo-text2'>Code</span>
        </div>
        <div className="na-list">
            <ul>
                <li className="link">
                    <a href="/">Home</a>
                </li>
                <li className="link">
                    <a href="/services">Services</a>
                </li>
                <li className="link">
                    <a href="/projects">Projects</a>
                </li>
                <li className="link">
                    <a href="/contact">Contact_Me</a>
                </li>
                <li className="link">
                    <a href="/about">About_Me</a>
                </li>
            </ul>
        </div>
        <div className="end">
            <a href="/beclient">Be a Client</a>
            <a href="/login">Login</a>
        </div>
    </div>
  )
}

export default Navbar