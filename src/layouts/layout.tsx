import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

import React from 'react'
type Props = {
    children : React.ReactNode,
    showHero? : Boolean
}

const Layout = ({children , showHero = false}:Props) => {
  return (
    <div className='flex flex-col'>
        <Header/>
        {showHero && <Hero/>}
        {children}
        <Footer/>
    </div>
  )
}


export default Layout
