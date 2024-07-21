import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  const [theme, setTHeme] = useState('light');
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTHeme}/>
    </div>
  )
}
