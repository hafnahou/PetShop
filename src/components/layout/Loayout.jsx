import React from 'react'
import Header from '../Header/Header'
import Footer  from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Loayout = () => {
  return(
    <>
    <Header/>

    <div>
       <Routers/>
    </div>
    <Footer/>
    </>
  );
}

export default Loayout
