import React, { useState, useEffect } from "react";
import {Pager} from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"

import ReactPageScroller from "./addition";

import Header from '../section/Header/Header'
import Mouse from '../ItemComponent/Mouse/Mouse'
import FirstComponent from '../section/HomePage/HomePage'
import SecondComponent from '../section/AboutPage/AboutPage'
import ThirdComponent from '../section/ServicePage/ServicePage'
import FourthComponent from '../section/PortfolioPage/PortfolioPage'
import FifthComponent from '../section/ContactPage/ContactPage'
import { Modal1 } from '../ItemComponent/Modal/Modal'

import "./index.css";

export default function FullPage({ currentPage, setCurrentPage, burgerContent, setBurgerContent }) {

  const [modalOpen, setModalOpen] = useState(false)
  const [modalId, setModalId] = useState(1)
  const [numberPage, setNumberPage] = useState(1)

  const handlePageChange = number => {
    setCurrentPage(number)
  };

  // console.log(currentPage)

  const handleBeforePageChange = number => {
    // console.log(number)
  };

  const getPagesNumbers = (number) => {
    const pageNumbers = [];

    return [...pageNumbers];
  };

  
  const pagesNumbers = getPagesNumbers();

  const mouseToPage = () => {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }

 

  return (
    <React.Fragment>
      <Header burgerContent = {burgerContent} setBurgerContent = {setBurgerContent}/>
      <Mouse currentPage = {currentPage} setCurrentPage = {setCurrentPage} mouseIndex = {1}/>
      {modalOpen ? <Modal1 setModalOpen = {setModalOpen} modalId = {modalId} setModalId = {setModalId} /> : ''}
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <FirstComponent currentPage = {currentPage} setCurrentPage= {setCurrentPage} burgerContent = {burgerContent}/>
        <SecondComponent setCurrentPage= {setCurrentPage}/>
        <ThirdComponent setCurrentPage= {setCurrentPage} modalOpen = {modalOpen} setModalOpen = {setModalOpen}  modalId = {modalId} setModalId = {setModalId} />
        <FourthComponent setCurrentPage= {setCurrentPage}/>
        <FifthComponent setCurrentPage= {setCurrentPage}/>
      </ReactPageScroller>
      <Pager className="pagination-additional-class fixed_pagination">
        {/* {pagesNumbers} */}
        <Pager.Item eventKey={0} onSelect={handlePageChange} >
          01
          {currentPage === 0 ? <div className = "pipe" style = {{marginBottom: `${currentPage === 0 ? '-35px' : '0px'}`}}></div> : ''}
        </Pager.Item>
        <Pager.Item eventKey={1} onSelect={handlePageChange} style = {{marginBottom: `${currentPage === 1 ? '-25px' : '20px'}`}} >
          02
          {currentPage === 1 ? <div className = "pipe"></div> : ''}
        </Pager.Item>
        <Pager.Item eventKey={2} onSelect={handlePageChange} style = {{marginBottom: `${currentPage === 2 ? '-25px' : '20px'}`}} >
          03
          {currentPage === 2 ? <div className = "pipe"></div> : ''}
        </Pager.Item>
        <Pager.Item eventKey={3} onSelect={handlePageChange} style = {{marginBottom: `${currentPage === 3 ? '-25px' : '20px'}`}} >
          04
          {currentPage === 3 ? <div className = "pipe" ></div> : ''}
        </Pager.Item>
        <Pager.Item eventKey={4} onSelect={handlePageChange} style = {{marginBottom: `${currentPage === 4 ? '-25px' : '20px'}`}} >
          05
          {currentPage === 4 ? <div className = "pipe"></div> : ''}
        </Pager.Item>
      </Pager>
    </React.Fragment>
  );
}
