

import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.jpg'
import "../Style/home.css"
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

                          <button className='buy__btn'>Shop Now</button>
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
            
     </Helmet>
     
}

export default Home



 
