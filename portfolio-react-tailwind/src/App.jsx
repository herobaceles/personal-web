import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar.jsx'
import HeroPanel from './components/HeroPanel.jsx'
import Projects from './components/Projects.jsx'
function App() {
 

  return (




    <>
      <NavBar />
      <HeroPanel />
      <Projects />
      <Footer />
    </>
  )
}

export default App
