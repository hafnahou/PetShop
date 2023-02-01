import React from 'react'
import './Footer.css'


import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'

import { Link } from 'react-router-dom' 


const Footer = () => {

  const year =new Date().getFullYear()


  return (
    <footer className='footer '>
         <Row>
          <Col lg='4'>
          <div className="logo">
                <div>
                  <h1 className='text-white'>Mtm Vetinery Medicels & Pet Shop</h1>
                     
                </div>
                
               </div>
               <p className="footer__text mt-4">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Quisquam ducimus quis sit labore, hic sunt
                    voluptatem blanditiis at deserunt ab.
                 </p>
          </Col>

          <Col lg="3">
              
              <div className="footer__quck-links">
                <h4 className="quck__link-title text-white">
                     top Categories
                </h4>
                <ListGroup className='mb-3'>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="#">Mobile Pone</Link>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="#">Modern sofa</Link>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="#">arm chai</Link>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="#">smart waych</Link>
                    </ListGroupItem>
                </ListGroup>
              </div>

          </Col>
           
          <Col lg="2">
             
          <div className="footer__quck-links text-white">
                <h4 className="quck__link-title">
                     usefull Links
                </h4>
                <ListGroup className='mb-3'>
                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="/shop">Shop</Link>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="/cart">cart</Link>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="/login">Login</Link>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0'>
                      <Link to="#">privacy Policy</Link>
                    </ListGroupItem>
                </ListGroup>
              </div>

          </Col>

          <Col lg="3">
              
          <div className="footer__quck-links">
                <h4 className="quck__link-title text-white">
                     Contacts
                </h4>
                <ListGroup className='footer__contact'>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i className='ri-map-pin-line'></i></span>
                      <p>123 usa amaerca </p>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                     <span><i class="ri-phone-line"></i></span>
                      <p>6616346421344</p>
                    </ListGroupItem>

                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span>
                      <i class="ri-mail-line"></i>
                      </span>
                       <p>test2gmail.com</p>
                    </ListGroupItem>

                </ListGroup>
              </div>
          </Col>

          <Col lg='12 '>
                  <p className="footer_copyright">
                    Copiright {year} Developed by Muhammed Athif. All rights reserved.
                  </p>
          </Col>


         </Row>
    </footer>
  )
}

export default Footer
