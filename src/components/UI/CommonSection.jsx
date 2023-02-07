import React from 'react'
import { Container } from 'reactstrap'
import '../../Style/Common-section.css'


const CommonSection = ({title}) => {
  return (
    <section className='common_section text-center'>
          <Container>
            <h1>{title}</h1>
          </Container>
    </section>
  )
}

export default CommonSection
