import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Library from './components/Library'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="App">
    <Library/>
    </div>
    <Footer/>
    </>
  )
}

export default App
