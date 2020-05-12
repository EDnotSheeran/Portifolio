import React from 'react'

import Navbar from '../../components/Navbar'
import Devcard from '../../components/Devcard'
import './style.css'
export default function Frame({children}) {
    return (
        <div className="frame-container">
            <Navbar/>
            <main className='frame-children'>{children}</main>
            <Devcard/>
        </div>
    )
}