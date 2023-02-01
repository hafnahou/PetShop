

import { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.jpg'
import { Link } from 'react-router-dom'
import "../Style/home.css"
import {motion} from 'framer-motion'
import products from '../assets/data/products'

import Service from '../services/Service'
import ProductList from '../components/UI/ProductList'
import counterimg from '../assets/images/counter-timer-img.png'
import Clock from "../components/UI/Clock"

const Home = () => {

    const [trendingProducts,setTrendingProducts]=useState([])
    const [bestsalesProducts,setBestsalesProducts]=useState([])
    const [mobileProducts,setMobileProducts]=useState([])
    const [wirlessProducts,setwirlessProducts]=useState([])
    const [popularProducts,setPopularProducts]=useState([])





    const year =new Date().getFullYear()

    useEffect(()=>{
      const filteredTrendingProducts =products.filter(
        (item)=>item.category === "chair" )
       
        const filteredBestsalesProducts =products.filter(
          (item)=>item.category === "sofa" )


          const filteredMobileProducts =products.filter(
            (item)=>item.category === "mobile" )

            const filteredwirlessProducts =products.filter(
              (item)=>item.category === "wireless" )
             
              const filteredPopularProducts =products.filter(
                (item)=>item.category === "popular"
              )

            
       
        
      
        setTrendingProducts(filteredTrendingProducts);
        setBestsalesProducts(filteredBestsalesProducts)
        setMobileProducts(filteredMobileProducts)
        setwirlessProducts(filteredwirlessProducts)
        setPopularProducts(filteredPopularProducts)



    },[]);

  

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
            
            {/* trending */}
            <section className="trending__products">
                 <Container>
                  <Row>
                       <Col lg='12' className='text-center'>
                        <h2 className='section__title'>Trending Products</h2>
                       </Col>
                       <ProductList data={trendingProducts}/>
                  </Row>
                 </Container>
            </section>
              
              {/* bestsale */}
            <section className='best-sales'>
              <Container>
              <Row>
                    <Col lg='12' className='text-center'>
                     <h2 className='section__title'>Best Sales</h2>
                      </Col>
                      <ProductList data={bestsalesProducts}/>   
                  </Row>
              </Container>
            </section>

           {/* timer */}
            <section className='timer__count'>
                   <Container>
                    <Row>
                       <Col lg='6' md='6' >
                        <div className="clock__top-content">
                          <h4 className='text-white fs-6 mb-2'>Limitted Offers</h4>
                          <h3 className='text-white fs-5 md-3'>qyuality Ardmssdkfh</h3>
                        </div>
                             <Clock/>

                            <motion.button whileTap={{scale:1.2}} className='buy__btn store_btn'>
                              <Link to="/shop">Visit Store</Link>
                              </motion.button>
                       </Col>
                    
                       <Col lg='6' md='6' className='text-end' >
                        <img src={counterimg} alt="" />
                       </Col>
                       </Row>
                   </Container>
               </section>

               <section className='new__arrivals'>
                   <Container>
                      <Row>
                          <Col lg='12' className='text-center'>
                              <h2 className="section__title">New Arrivals</h2>
                          </Col>

                         <ProductList data={mobileProducts}/>

                         <ProductList data={wirlessProducts}/>


                      </Row>
                   </Container>
               </section>

                <section className='popular__category'>
                <Container>
                      <Row>
                          <Col lg='12' className='text-center'>
                              <h2 className="section__title">Popular Categorys</h2>
                          </Col>

                         <ProductList data={popularProducts} />

                         <ProductList />


                      </Row>
                   </Container>
                </section>
     </Helmet>
     
}

export default Home



 
 
