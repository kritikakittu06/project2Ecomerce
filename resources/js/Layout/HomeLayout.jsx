import React from 'react'
import Navbar from '../components/Common/Navbar/Navbar'
import Footer from '../components/Common/Footer/Footer'

const HomeLayout = ({children}) => {
  return (
    <>
      <Navbar/>
        {children}
      <Footer/>
    </>
  )
}

export default HomeLayout
