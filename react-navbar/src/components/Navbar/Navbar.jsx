import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_light from '../../assets/search-w.png'
import search_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';


export default function Navbar({theme, setTheme}) {
    function toggle_mode(){
        theme =='light'?setTheme('dark'):setTheme('light');
        console.log(theme);
    }
  return (
    <div>
        {/* <h1>Navbar</h1> */}
        <div className="navbar">
            <img src={theme == 'light'?logo_light:logo_dark} alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            
            <div className="search-box">
                <input type="text" placeholder='Search' />
                <img src={theme == 'light'?search_light:search_dark} alt="" />
            </div>

            <img src={theme == 'light'?toggle_light:toggle_dark} alt="" className='toggle-icon' onClick={()=>{toggle_mode()}}/>
        </div>
    </div>
  )
}
