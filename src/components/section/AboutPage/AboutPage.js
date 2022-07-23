import React from 'react'

import './About.css'
import Button from '../../ItemComponent/Button/button'
import Mouse from '../../ItemComponent/Mouse/Mouse'

import GroupPeople from '../../../image/AboutPage/People.png'
import dots from '../../../image/AboutPage/dots.png'

function AboutPage({ setCurrentPage }) {
    return (
        <div className="component second-component">
            <div className = "container">
                <div className = "about_page">
                    <div className = "about_page_inner">
                        <div className = "about_page_left">
                            <h1 className = "h_title about_page_title"><span className = "green_text">Biz</span> haqimizda</h1>
                            <hr className = "green_line about_page_green_line" />
                            <p className = "about_page_subtitle">SoftData - bu mijozlar biznesini uzoq muddatli qo'llab-quvvatlovchi kompaniya. IT-konsalting, brendlash texnologiyalari, mobil ilovalar yaratish, dizayn yechimlari, Internet-loyihalarni ishlab chiqish va qo'llab-quvvatlash, Internet-marketing, veb-saytlarni yaratish va ishlab chiqish, shuningdek ularni qo'llab-quvvatlash bilan mijozlarga beminnat xizmatlarni ko'rsatadi. Hozirgi kunga qadar kompaniyamiz bir nechta startup loyihalarni amalga oshirdi.</p>
                            <div className = "about_page_button">
                                <Button >Batafsil</Button>
                            </div>
                        </div>
                        <div className = "about_page_right">
                            <img className = "about_page_right_group" src = {GroupPeople} alt = 'group_people'/>
                            <img className = "about_page_right_dots" src = {dots} alt = 'dots'/>
                        </div>
                    </div>
                </div>
                {/* <Mouse setCurrentPage = {setCurrentPage} mouseIndex = {2}/> */}
            </div>
        </div>
    )
}

export default AboutPage
