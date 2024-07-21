import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  const currentTheme = localStorage.getItem('current_theme');
  const [theme, setTHeme] = useState(currentTheme?currentTheme:'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTHeme}/>
    </div>
  )
}
