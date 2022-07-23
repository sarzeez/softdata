import './App.css';
import FullPage from './components/PageScroller/FullPage'
import Burger from './components/section/Burger/Burger'
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState(null);
  const [burgerContent, setBurgerContent] = useState(false)

  return (
    <div className="app">
      <Burger burgerContent = {burgerContent} setBurgerContent = {setBurgerContent} currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
      <FullPage currentPage = {currentPage} setCurrentPage = {setCurrentPage} burgerContent = {burgerContent} setBurgerContent = {setBurgerContent}/>
    </div>
  );
}

export default App;
