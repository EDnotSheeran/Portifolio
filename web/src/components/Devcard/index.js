import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaWhatsapp, FaGithubAlt, FaLaptopCode, FaBlog, FaPaperPlane, FaToolbox, FaAdjust } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { GoMailRead } from 'react-icons/go'
import axios from 'axios'
import devConfig from '../../config/devConfig.json'
import './style.css'
export default function Devcard(){
    const [dev_name, setDev_name] = useState('')
    const [dev_photo, setDev_photo] = useState('')
    const [dev_bio, setDev_bio] = useState('')
    const [dev_github, setGithub] = useState('') 
    async function setDevInfo(){
        const user = await axios(`https://api.github.com/users/${devConfig.github_username}`)
        const { login, avatar_url, bio, blog } = user.data
        setDev_name(login)
        setDev_photo(avatar_url)
        setDev_bio(bio)
        setGithub(blog)
        return ''
    }
    setDevInfo()
    return(
        <aside id='devcard' className='darkmode'>
            <div className="personal-info">
                <h1 className='dev-name'>{dev_name}</h1>
                <a href={dev_photo}>
                    <img className='dev-photo' src={dev_photo} alt="dev_photo"/>
                </a>
                <p className="dev-bio">{dev_bio}</p>
            <ul className='social-media-list'>
                <a href={devConfig.linkedin_profile} className='social-media-link'>
                    <li className='social-media-item'>
                        <FaLinkedinIn className='icon'/>
                    </li>
                </a>
                <a href={dev_github} className='social-media-link'>
                    <li className='social-media-item'>
                        <FaGithubAlt className='icon'/>
                    </li>
                </a>
                <a href={devConfig.facebook_profile} className='social-media-link'>
                    <li className='social-media-item'>
                        <FaFacebookF className='icon'/>
                    </li>
                </a>
                <a href={devConfig.gmail} className='social-media-link'>
                    <li className='social-media-item'>
                        <FaGoogle className='icon'/>
                    </li>
                </a>
                <a href={devConfig.whatsapp_link} className='social-media-link'>
                    <li className='social-media-item'>
                        <FaWhatsapp className='icon'/>
                    </li>
                </a>
            </ul>
            </div>
            <hr/>
            <nav className='navigation'>
                <ul className="nav-list">
                    <li className="nav-item active">
                        <Link to='' className="nav-link">
                            <BsPersonFill/>
                            about me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='' className="nav-link">
                            <FaLaptopCode/>
                            portifolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='' className="nav-link">
                            <FaToolbox/>
                            services & pricing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='' className="nav-link">
                            <FaBlog/>
                            blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='' className="nav-link">
                            <GoMailRead/>
                            contact
                        </Link>
                    </li>
                </ul>
                <button className='button btn-hire-me'><FaPaperPlane/> Hire me</button>
            </nav>
            <div className="darkmode-toggle">
                <hr/>
                <p><FaAdjust/>dark mode</p>
            </div>
        </aside>
    )
}