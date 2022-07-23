import React, {useEffect} from 'react'
import { Link }from 'react-router-dom'
import './home.css'
import Aos from 'aos'
import "aos/dist/aos.css"

import Button from '../../ItemComponent/Button/button'
import Handshake from '../../../image/HomePage/Handshake.svg'
import facebook from '../../../image/HomePage/Facebook.svg'
import instagram from '../../../image/HomePage/Instagram.svg'
import telegram from '../../../image/HomePage/Telegram.svg'
import whatsup from '../../../image/HomePage/WhatsApp.svg'
import Globus from '../../../image/HomePage/Vector.svg'

function HomePage({ currentPage, setCurrentPage, burgerContent }) {

    useEffect(() => {
        Aos.init({duration: 1000})
      }, [])

    return (
        <div data-aos = "fade-up" className="component first-component" id = "first-component">
            {/* <Burger burgerContent = {burgerContent}/> */}
            <div className = "container">
                <div className = "home_page_wrapper">
                    <div className = "home_page">
                        <div className = "home_page_inner">
                            <div className = "hello_there">
                                <img src = {Handshake} alt = "handShake"/>
                                <p className = "hello_there_text">Hello there</p>
                            </div>
                            <h1 className = "h_title home_page_title">Software Development <br /><span className = "green_text">Process</span></h1>
                            <hr className = "green_line"></hr>
                            <div className = "home_page_group_button">
                                <Button onClick = {() => setCurrentPage(1)}>Loyihani boshlash</Button>
                                <Button onClick = {() => setCurrentPage(4)}>Biz bilan aloqa</Button>
                            </div>
                        </div>
                    </div>
                    <div className = "home_page_addition">
                        <div className = "soft_languages">
                            <img src = {Globus} alt = "global"/>
                            <a href = "#uz" className = "soft_languages_item_1">O’ZBEK</a>
                            <a href = "#ru">РУССКИЙ</a>
                            <a href = "#en">ENGLISH</a>
                        </div>
                        <div className = "join_us">
                            <p className = "join_us_text">BIZGA QO’SHILING:</p>
                            <Link to = {{pathname: 'https://www.facebook.com/softdata.uz'}} target = "_blank">
                                <img src = {facebook} alt = 'facebook'/>
                            </Link>
                            <Link to = {{pathname: 'https://www.instagram.com/softdatauz'}} target = "_blank">
                                <img src = {instagram} alt = 'facebook'/>
                            </Link>
                            <a href = "#">
                                <img src = {telegram} alt = 'facebook'/>
                            </a>
                            <a href = "#">
                                <img src = {whatsup} alt = 'facebook'/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <Mouse currentPage = {currentPage} setCurrentPage = {setCurrentPage} mouseIndex = {1}/> */}
            </div>
        </div>
    )
}

export default HomePage
