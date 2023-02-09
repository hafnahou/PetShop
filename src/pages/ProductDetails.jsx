import React,{useState,useRef,useEffect} from 'react'

import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../Style/productDetailes.css'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import {toast} from 'react-toastify';


const ProductDetails = () => {

  const {id}=useParams()
  const product =products.find(item=>item.id === id)
   console.log(product)
  const {imgUrl,productName,price,avgRating,reviews,description,shortDesc,category} = product
  
   const [tab,setTab] =useState('desc')

  //subimt button share expirence
  const [rating,setRating]=useState(null)

   //related Products
  const relatedProducts = products.filter(item=>item.category===category)
  
  

  
  const reviewUser=useRef('')
  const reviewMsg =useRef('')

  const submitHandler =(e)=>{
    e.preventDefault()


    const reciewUserName = reviewUser.current.value
    const reciewUserMsg = reviewMsg.current.value

    

  }

  const dispatch =useDispatch()


   const addToCart =()=>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    
    }))
     toast.success('Product Added successfully')
   }
   
   useEffect(()=>{
    window.scrollTo(0,0);

   },[product])
  

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
                            <span onClick={()=>setRating(1)}><i class="ri-star-s-fill"></i></span>
                            <span  onClick={()=>setRating(2)}><i class="ri-star-s-fill"></i></span>
                            <span  onClick={()=>setRating(3)}><i class="ri-star-s-fill"></i></span>
                            <span  onClick={()=>setRating(4)}><i class="ri-star-s-fill"></i></span>
                            <span  onClick={()=>setRating(5)}><i class="ri-star-half-s-line"></i></span>
                           </div>
                           <p>(<span>{avgRating}</span> rating)</p>
                    </div>
                   
                     <div className='d-flex align-items-center gap-5' >
                       <span className='product__price'>{price}</span>
                       <span>Category:{category}</span>
                     </div>

                   <p className='mt-3'>{shortDesc}</p>

                     <button onClick={addToCart} className='buy__btn'>Add to Cart</button>
                </div>
              </Col>
             </Row>
        </Container>
      </section>
      

       {/* decription and rev */}

      <section>
        <Container>
          <Row>
          <Col lg='12'>
               <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==='desc' ? 'active__tab' : "  "}`}onClick={()=>setTab('desc')} >Description</h6>
                <h6 className={`${tab==='rev' ? 'active__tab' : "  "}`} onClick={()=>setTab('rev')}>Reviews ({reviews.length})</h6>
                
               </div>

               {
                tab==='desc' ? <div className="tab__content mt-5">
                       <p>{description}</p>
                        </div> 
                        : <div className='product__review'>
                          <div className="review__wrapper">
                            <ul>
                              {
                                reviews?.map((item,index)=>(
                                  <li kew={index} className="mb-4 mt-4">
                                     <h6>Athif Binu</h6>
                                    <span>{item.rating} ( rating)</span>
                                      <p>{item.text}</p>
                                  </li>
                                  
                                ))
                              }
                            </ul>
                             
                             <div className="review__from">
                               <h4>Share Your Expirence</h4>
                                      <form action="" onSubmit={submitHandler}>
                                          <div className="from__group">
                                              <input type="text"
                                               placeholder='Enter Name' 
                                               ref={reviewUser} />
                                          </div>


                                          <div className="from__group d-flex align-items-center gap-4 rating__group">
                                              <span>1<i className='ri-star-s-fill'></i></span>
                                              <span>2<i className='ri-star-s-fill'></i></span>
                                              <span>3<i className='ri-star-s-fill'></i></span>
                                              <span>4<i className='ri-star-s-fill'></i></span>
                                              <span>5<i className='ri-star-s-fill'></i></span>

                                          </div>

                                          <div className="from__group">
                                              <textarea 
                                              ref={reviewMsg} //msg
                                               rows={4} 
                                              type="text" 
                                              placeholder='Review Message...' />
                                          </div>

                                         <button type='submit' className='buy__btn'>Submit</button>
                                      </form>
                             </div>
                          </div>
                        </div>
               }

          </Col>

           <Col lg='12' className='mt-5'>
               <h2 className="related__title">You Might Also Like</h2>
               
           </Col>


           
           <ProductList data={relatedProducts}/>

          </Row>
        </Container>
      </section>
       
    </Helmet>
  )
}

export default ProductDetails
