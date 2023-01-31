import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container,Row,Badge } from 'reactstrap'

const nav__links =[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'shop'
  },
  {
    path:'cart',
    display:'cart'
  },

]
const Header = () => {
  return <header className='header'>
       <Container>
        <Row>
          <div className="nav__wrapper">

               <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>Mtm Petshop</h1>
                   {/* <p>Since 2021</p> */}
                </div>
               </div>


               <div className="navigation">
                <ul className="menu">
             
                 {
                  nav__links.map((item,index)=>(
                     <li className='nav__item' key={index}>
                      <NavLink to={item.path}
                       className={(navClass)=>
                        navClass.isActive ? 'nav__active ':''}>{item.
                      display}</NavLink>
                     </li>
                  ))
                 }
             
                 
                </ul>
               </div>

               <div className="nav__icons">

                <span className='fav__icon'>
                <Badge className='badge bg-black' >5</Badge>
                <i class="ri-heart-line"></i>

                </span>

                <span className='cart__icon'>
                <Badge className='badge bg-black'>5</Badge>
                <i class="ri-shopping-bag-line"></i>
                </span>

                <span>
                  <motion.img whileTap={{scale:1.1}} src={userIcon} alt="" />
                </span>

               </div>

               <div className="mobile__menu">
                <span>
                  <i class="ri-menu-line"></i>
                </span>
               </div>



          </div>
          </Row>
       </Container>
  </header>
}

export default Header


