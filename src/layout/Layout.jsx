import React from 'react'
import NabBar from './header/NavBar'
import Footer from './footer/Footer'
import Header from './header/Header'
import './layout.css'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <NabBar/>
        
        <main className='layout-content'>
        {children}
        </main>
        <Footer/>

    </div>
  )
}

export default Layout