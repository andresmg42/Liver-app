import React from 'react'
import NabBar from './header/NavBar'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <NabBar/>
        <Header/>
        <main className='layout-content'>
        {children}
        </main>
        <Footer/>

    </div>
  )
}

export default Layout