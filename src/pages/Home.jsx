

import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.jpg'
import { Link } from 'react-router-dom'
import "../Style/home.css"
import {motion} from 'framer-motion'
import Service from '../services/Service'
import ProductList from '../components/UI/ProductList'
const Home = () => {

    const year =new Date().getFullYear()
  
     return <Helmet title={'home'}>
           <section className='hero_section'>
         <Container>
             <Row>
               <Col lg='6' md='6'>
                 <div className="hero__content">
                       <p className="hero__subtittle">
                         Trending Producs in {year} </p>
                      <h2>Lorem ipsum dolor sit amet conse</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Consectetur porro obcaecati qua</p>

                          
                            
                            <button className='buy__btn'><Link to="/shop">Shop Now</Link></button>
                </div>
               </Col>

              <Col lg='6' md='6'>
                <div className="hero__img">
                    <img src={heroImg} alt="" />
                 </div>  
               </Col>
             </Row>

          </Container>
    </section>

     <Service/>
            <section className="trending__products">
                 <Container>
                  <Row>
                       <Col lg='12' className='text-center'>
                        <h2 className='section__title'>Trending Products</h2>
                       </Col>
                       <ProductList/>
                  </Row>
                 </Container>
            </section>
     </Helmet>
     
}

export default Home



 
 
