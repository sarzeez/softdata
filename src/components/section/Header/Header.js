import React from 'react'
import Hamburger from 'hamburger-react'

import Logo from '../../../image/HomePage/Logo.svg'
import './header.css'

function Header({ burgerContent, setBurgerContent }) {
    return (
        <header className = "my_header">
            <div className = "container">
                <div className = "header_inner">
                    <img src = {Logo} alt = "SoftDataLogo"/>
                    {/* <div className = "burger" onClick = {() => setBurgerContent(!burgerContent)}>
                    </div> */}
                    <Hamburger toggled={burgerContent} toggle={setBurgerContent} />
                </div>
            </div>
        </header>
    )
}

export default Header
