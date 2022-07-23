import React from 'react'

import Icon1 from '../../../image/ServicePage/web_development.svg'
import Icon2 from '../../../image/ServicePage/Graphic.svg'
import Icon3 from '../../../image/ServicePage/android.svg'
import Icon4 from '../../../image/ServicePage/crm.svg'
import Icon5 from '../../../image/ServicePage/web_design.svg'
import Desktop from '../../../image/ServicePage/Desktop.svg'
import './service.css'

function ServicePage({ setCurrentPage, modalOpen, setModalOpen, setModalId}) {

    return (
        <div className="component third-component">
            <div className = "container">
                <div className = "service_page_wrapper">
                    <div className = "service_page">
                        <div className = "service_page_item" >
                            <h1 className = "h_title service_title">Bizning <span className = "green_text">xizmatlar</span></h1>
                        </div>
                        <div className = "service_page_item" onClick = {() => {setModalOpen(true); setModalId(0)}}>
                            <div className = "service_page_item_inner">
                                <img src = {Icon1} alt = 'icon'/>
                                <h2>Web saytlar</h2>
                                <hr className = "green_line" />
                                <p>Brendni kuchaytiradigan va xaridorlarni jalb qiladigan saytlarni yaramatiz. Korporativ sayltar va internet magazinlar</p>
                            </div>
                            <div className = "service_page_round">
                                <div className = "service_page_round_inner"></div>
                            </div>
                        </div>
                        <div className = "service_page_item" onClick = {() => {setModalOpen(true); setModalId(1)}}>
                            <div className = "service_page_item_inner">
                                <img src = {Icon2} alt = 'icon'/>
                                <h2>Grafik dizayn</h2>
                                <hr className = "green_line" />
                                <p>Posterlar, Bannerlar, Vizitka va boshqa turdagi dizayn turlari</p>
                            </div>
                            <div className = "service_page_round">
                                <div className = "service_page_round_inner"></div>
                            </div>
                        </div>
                        <div className = "service_page_item" onClick = {() => {setModalOpen(true); setModalId(2)}}>
                            <div className = "service_page_item_inner">
                                <img src = {Icon3} alt = 'icon'/>
                                <h2>Android dastur</h2>
                                <hr className = "green_line" />
                                <p>Mobil ilovalar har qanday faoliyat sohasidagi o'zgarishlarga tezkor munosabat bildirishga va o'z vaqtida ma'lumot olishga odatlangan har bir inson uchun dolzarb ehtiyojdir</p>
                            </div>
                            <div className = "service_page_round">
                                <div className = "service_page_round_inner"></div>
                            </div>
                        </div>
                        <div className = "service_page_item" onClick = {() => {setModalOpen(true); setModalId(3)}}>
                            <div className = "service_page_item_inner">
                                <img src = {Desktop} alt = 'icon'/>
                                <h2>Desktop dastur</h2>
                                <hr className = "green_line" />
                                <p>Desktop dastur - bu foydalanuvchi kompyuterida o'rnatilgan va operatsion tizim ostida ishlaydigan dastur. Bunday dasturlar yuqori mahsuldorlikka ega bo'lib, texnik qurilmalar bilan to'g'ridan-to'g'ri ishlashi mumkin.</p>
                            </div>
                            <div className = "service_page_round">
                                <div className = "service_page_round_inner"></div>
                            </div>
                        </div>
                        <div className = "service_page_item" onClick = {() => {setModalOpen(true); setModalId(4)}}>
                            <div className = "service_page_item_inner">
                                <img src = {Icon5} alt = 'icon'/>
                                <h2>Web dizayn</h2>
                                <hr className = "green_line" />
                                <p>Barcha turdagi web saytlar va web ilovalar</p>
                            </div>
                            <div className = "service_page_round">
                                <div className = "service_page_round_inner"></div>
                            </div>
                        </div>
                        <div className = "service_page_item" onClick = {() => {setModalOpen(true); setModalId(5)}}>
                            <div className = "service_page_item_inner">
                                <img src = {Icon4} alt = 'icon'/>
                                <h2>CRM</h2>
                                <hr className = "green_line" />
                                <p>CRM tizimi kompaniyaning ichki ish jarayonlarini avtomatlashtirish va boshqarish uchun mo'ljallangan</p>
                            </div>
                            <div className = "service_page_round">
                                <div className = "service_page_round_inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Mouse setCurrentPage = {setCurrentPage} mouseIndex = {3}/> */}
            </div>
        </div>
    )
}

export default ServicePage
