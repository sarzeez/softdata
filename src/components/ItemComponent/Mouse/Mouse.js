import React from 'react'
import { Pager } from 'react-bootstrap'
import './mouse.css'

function Mouse({ currentPage, setCurrentPage, mouseIndex }) {

    let page = currentPage === 4 ? 0 : currentPage + 1;
    return (
        <div style = {{display: `${currentPage === 4 ? 'none' : ''}`}} className = "mouse_block" onClick = {() => setCurrentPage(page)}>
            <div className = "mouse">
                <div className = "mouse_inner">
                    {/* <Pager>
                        <Pager.Item eventKey = {5} onSelect={handlePageChange}>
                            1123
                        </Pager.Item>
                    </Pager> */}
                </div>
            </div>
        </div>
    )
}

export default Mouse
