import React from 'react'
import productImg from '../../assets/images/Dogfood/n&d.jpg'
import {motion} from 'framer-motion'
import '../../Style/product-card.css'
import {Col} from 'reactstrap'
const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
            <div className="product_item">
                {/* proble */}
        <div className="product_img">       
            <img src={productImg} alt="" />
        </div>
        <h3 className="Product__name">
            Moders arrmchai
        </h3>
        <span>chair</span>
        <div className="product__card-button">
            <span className='price'>299</span>
            <span><i class="ri-add-line"></i></span>
        </div>
       </div>
    
    </Col>
 
  )
}

export default ProductCard
