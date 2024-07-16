import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../assets/twitter.png'
import reload_icon from '../assets/reload.png'

export const RandomQuote = () => {

  let quotes = [];
  
  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select);
  }

  const [quote, setQuote] = useState({
    text: "Difficult increase, Success Increases",
    author: "Krischal Shrestha"
  });
  
  loadQuotes();


function handleReload(){
  random();
}

function handleTwitter(){
  window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
}

  return (

    <div className='container'>
        <div className="quote">
          {quote.text}
        </div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">
            - {quote.author.split(',')[0]}
          </div>
          <div className="icons">
            <img src={reload_icon} alt="" width="70px" onClick={handleReload}/>
            <img src={twitter_icon} alt=""  width="70px" onClick={handleTwitter}/>
          </div>
        </div>
    </div>
  )
}
