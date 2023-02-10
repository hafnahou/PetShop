import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../Style/login.css'
const Signup = () => {
  
  const [name,setName]=useState('')

  const [email,setEmail]=useState('')

  const [password,setPassword]=useState('')
  

  const [file,setFile]=useState(null)
  
   
  return (
    <Helmet title="Signup">
       <section>
           <Container>
               <Row>
                  <Col lg='6' className='m-auto text-center'>
                      <h3 className='fw-bold mb-4'>Signup</h3>

                      <Form className='auth__form'>
                         <FormGroup className='form__group'>
                                <input type="text" placeholder='Enter your UserName' value={name}
                                 onChange={e=> setName(e.target.value)}  />
                         </FormGroup>

                         <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your Email' value={email}
                                 onChange={e=> setEmail(e.target.value)}  />
                         </FormGroup>

                         <FormGroup className='form__group'>
                                <input type="password" placeholder='Enter your Password'
                                    value={password}  onChange={e=> setPassword(e.target.value)} />
                         </FormGroup>
                         

                         <FormGroup className='form__group'>
                                <input type="file" 

                                 onChange={e=> setFile(e.target.files[0])} />
                         </FormGroup>
                      

                         <button type='submit' className='buy__btn bg-white text-black '>Create an account</button>
                         <p>already have an account?<Link to='/Login'>Login</Link> </p>

                      </Form>
                      
                  </Col>
               </Row>
           </Container>
       </section>
    </Helmet>
  )
}

export default Signup