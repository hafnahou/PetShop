import React from 'react'
import { Container,Row,Col,FormGroup,Form } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'


import '../Style/Checkout.css'
import { useSelector } from 'react-redux'


const Checkout = () => {

  const totalQty =useSelector(state=>state.cart.totalQuantity )
  const totalAmount =useSelector(state=>state.cart.totalAmount)


  return (
    <Helmet>
        <CommonSection title="Checkout"/>
        <section>
          <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold '>Billing Information</h6>
               <Form className='billing__form'>
                
                    <FormGroup className='form__group'>
                        <input type="text" placeholder='Enter Your Name' />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input type="email" placeholder='Enter Your Email' />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input type="number" placeholder='Phone Number' />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input type="text" placeholder='Street Adress' />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input type="text" placeholder='Enter Your City' />
                    </FormGroup>


                    <FormGroup className='form__group'>
                        <input type="text" placeholder='Postal code' />
                    </FormGroup>

                    <FormGroup className='form__group'>
                        <input type="text" placeholder='Country' />
                    </FormGroup>


              
                 </Form>
            </Col>
              

                 <Col lg='4'>
                     <div className="checkout__cart">
                          <h6>Total qty: <span>{totalQty} items</span></h6>
                          <h6>SubTotel: <span>{totalAmount}</span></h6>
                          <span>Shinping: <br />free Shinping <span>0</span></span>
                          <h4>
                            Total Cost: <span>{totalAmount}</span>
                          </h4>
                          <button className='buy__btn text-black bg-white w-100 '>Place Order</button>
 
                    
                     </div>
                 </Col>
        
             </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Checkout
