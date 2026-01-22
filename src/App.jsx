import React from 'react'
import Navbar from './Component/Navbar'
import Catorgy from './Component/Catorgy'
import News from './Page/News'
import Footer from './Component/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Catorgy  className = {'py-3'}/>
    <News  className = {"pb-10"}/>
    <Footer />
    </>
  )
}

export default App