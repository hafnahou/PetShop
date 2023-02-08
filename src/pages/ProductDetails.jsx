import React,{useState} from 'react'

import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../Style/productDetailes.css'
import { motion } from 'framer-motion'


const ProductDetails = () => {

  const {id}=useParams()
  const product =products.find(item=>item.id === id)
   console.log(product)
  const {imgUrl,productName,price,avgRating,reviews,description,shortDesc} = product
  
   const [tab,setTab] =useState('desc')

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>

      <section className='pt-0'>
        <Container>
             <Row>
              <Col lg='4 mt-5 '>
                <img src={imgUrl} alt=''/>
              </Col>

              <Col lg='5'>
                <div className="product__detailes">
                    <h2>{productName}</h2>

                    <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                           <div>
                            <span><i class="ri-star-s-fill"></i></span>
                            <span><i class="ri-star-s-fill"></i></span>
                            <span><i class="ri-star-s-fill"></i></span>
                            <span><i class="ri-star-s-fill"></i></span>
                            <span><i class="ri-star-half-s-line"></i></span>
                           </div>
                           <p>(<span>{avgRating}</span> rating)</p>
                    </div>
                   
                   <span className='product__price'>{price}</span>
                   <p className='mt-3'>{shortDesc}</p>

                     <button className='buy__btn'>Add to Cart</button>
                </div>
              </Col>
             </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Col lg='12'>
               <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==='desc' ? 'active__tab' : ""}`}>Description</h6>
                <h6>Reviews({reviews.length})</h6>
                
               </div>

               <div className="tab__content mt-5">
                <p>{description}</p>
               </div>
          </Col>
        </Container>
      </section>
       
    </Helmet>
  )
}

export default ProductDetails
