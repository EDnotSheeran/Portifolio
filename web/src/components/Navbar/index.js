import React from 'react'
import { Link } from 'react-router-dom'
import { FaCat, FaPaw, FaWindows, FaApple, FaAdjust } from 'react-icons/fa'
import {GiReactor} from 'react-icons/gi'

import './style.css'
export default function Navbar(){
    return(
        <nav id="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <Link to="" className="nav-link">
                        <span className="link-text">nuclear</span>
                        <GiReactor className="icon"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        <FaCat className="icon"/>
                        <span className="link-text">cats</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        <FaPaw className="icon"/>
                        <span className="link-text">paws</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        <FaWindows className="icon"/>
                        <span className="link-text">windows</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        <FaApple className="icon"/>
                        <span className="link-text">apple</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        <FaAdjust className="icon"/>
                        <span className="link-text">adjust</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}