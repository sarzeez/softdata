import React from 'react'
import './contact.css'
import Map from './map'
import Button from '../../ItemComponent/Button/button'

function ContactPage() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="component fifth-component">
            <div className = "container">
                <div className = "contact_page">
                    <div className = "contact_page_inner">
                        <h1 className = "h_title contact_title">Biz bilan <span className = "green_text">aloqa</span></h1>
                        <div className = "contact_form">
                            <form onSubmit = {handleSubmit}>
                                <div className = "form_top">
                                    <div className = "form_inner">
                                        <label>Ism <span>*</span></label>
                                        <input type = "text"/>
                                    </div>
                                    <div className = "form_inner">
                                        <label>Telefon <span>*</span></label>
                                        <input type = "text"/>
                                    </div>
                                    {/* <div className = "form_inner">
                                        <label>Mavzu <span></span></label>
                                        <input type = "text"/>
                                    </div> */}
                                </div>
                                <div className = "form_top">
                                    <div className = "form_middle_inner">
                                        <label>Xabar</label>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className = "form_button">
                                    <Button>Jo'natish</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className = "contact_map">
                        <div className = "contact_map_inner">
                            <div>
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
