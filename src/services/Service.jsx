import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import {motion} from "framer-motion"
import '../services/Service.css'
import serviceDate from '../assets/data/serviceData'
const Service = () => {
  return <section className='services'>
        <Container>
             <Row>
                {
                    serviceDate.map((item,index)=>(

                        <Col lg='3' md='4' key={index}>
                            
                        <motion.div whileHover={{scale:1.1}} className="service__item" style={{background:`${item.bg}`}}>
                             <span><i class={item.icon}></i></span>
                             <div>
                               <h3>{item.title}</h3>
                                 <p>{item.subtitle} </p>
                             </div>
                        </motion.div>
                   </Col>

                    ))
                }
               
             </Row>
        </Container>
  </section>
}

export default Service
