import React from 'react'
import Header from './Components/Header/Header'
import 'boxicons/css/boxicons.min.css'
import Herocontent from './Components/Pages/Herocontent'
import About from './Components/Pages/About'
import Projects from './Components/Pages/Projects'

const App = () => {
  return (
    <>
      <Header/>
      <Herocontent/>
      <About/>
      <Projects/>
    </>
  )
}

export default App