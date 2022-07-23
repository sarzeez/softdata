import React from 'react'
import { Link }from 'react-router-dom'
import './burger.css'

import facebook from '../../../image/Burger/Facebook.svg'
import instagram from '../../../image/Burger/Instagram.svg'
import telegram from '../../../image/Burger/Telegram.svg'
import whatsapp from '../../../image/Burger/WhatsApp.svg'

function Burger({ burgerContent, setBurgerContent, currentPage, setCurrentPage }) {
    return (
        <div className = {`burger_page ${burgerContent && 'burger_page_active'}`}>
            <div className = "container">
                <div className = "burger_page_inner">
                    <div className = "burger_page_left">
                        <div className = "burger_page_left_header">
                            <div className = "left_header_titles">
                                <div>
                                    <p onClick = {() => {setBurgerContent(false); setCurrentPage(0);}} style = {{color: `${currentPage === 0 ? '#29B85D' : '#000'}`}}>Bosh sahifa</p>
                                    <p onClick = {() => {setBurgerContent(false); setCurrentPage(1);}} style = {{color: `${currentPage === 1 ? '#29B85D' : '#000'}`}}>Biz haqimizda</p>
                                    <p onClick = {() => {setBurgerContent(false); setCurrentPage(2);}} style = {{color: `${currentPage === 2 ? '#29B85D' : '#000'}`}}>Xizmatlar</p>
                                    <p onClick = {() => {setBurgerContent(false); setCurrentPage(3);}} style = {{color: `${currentPage === 3 ? '#29B85D' : '#000'}`}}>Portfolio</p>
                                    <p onClick = {() => {setBurgerContent(false); setCurrentPage(4);}} style = {{color: `${currentPage === 4 ? '#29B85D' : '#000'}`}}>Biz bilan aloqa</p>
                                </div>
                            </div>
                            <div className = "left_header_links">
                                <div className = "left_header_links_inner">
                                    <p>Xizmatlar</p>
                                    <a href = '/'>Vizitka sayt</a>
                                    <a href = '/'>Korparativ sayt</a>
                                    <a href = '/'>Internet magazin</a>
                                    <a href = '/'>Davlat tashkilotlari uchun sayt</a>
                                    <a href = '/'>Shaxsiy blog</a>
                                </div>
                                <div className = "left_header_links_inner">
                                    <p>Qo'llab-quvvatlash</p>
                                    <a href = '/'>Saytlarga texnik xizmat ko'rsatish</a>
                                    <a href = '/'>Onlayn operator</a>
                                </div>
                                <div className = "left_header_links_inner">
                                    <p>Boshqa xizmatlar</p>
                                    <a href = '/'>Logotip</a>
                                    <a href = '/'>Brending</a>
                                    <a href = '/'>UI/UX Dizayn</a>
                                    <a href = '/'>SMM</a>
                                </div>
                                <div className = "left_header_links_inner"></div>
                            </div>
                        </div>
                        <div className = "burger_page_left_footer">
                            <p>© Copyright SoftData 2021.</p>
                        </div>
                    </div>
                    <div className = "burger_page_right">
                        <div className = "burger_page_right_item">
                            <h3>Manzil:</h3>
                            <p>Toshkent shahri, Mirobod tumani, <br />Talimarjon 1/1</p>
                        </div>
                        <div className = "burger_page_right_item">
                            <h3>Telefon:</h3>
                            <p>+998 (97) 147 25 95</p>
                            <p>+998 (97) 147 25 95</p>
                        </div>
                        <div className = "burger_page_right_item">
                            <h3>Email:</h3>
                            <p><span>softdatauz@gmail.com</span></p>
                        </div>
                        <div className = "burger_page_right_item">
                            <h3>Ish vaqti:</h3>
                            <p>Dushanba - Shanba</p>
                            <p>09:00 - 18:00</p>
                        </div>
                        <div className = "burger_page_right_item">
                            <h3>Ijtimoiy tarmoqlar</h3>
                            <div>
                                <Link to = {{pathname: "https://www.facebook.com/softdata.uz"}} target = "_blank">
                                    <img src = {facebook} alt = "facebook_link"/>
                                </Link>
                                <Link to = {{pathname: "https://www.instagram.com/softdatauz"}} target="_blank">
                                    <img src = {instagram} alt = "instagram_link"/>
                                </Link>
                                <img src = {telegram} alt = "telegram_link"/>
                                <img src = {whatsapp} alt = "whatsapp_link"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger
