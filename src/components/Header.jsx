import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {

  const quotes = [
    "In focus, find clarity",
    "Attention is the essence of presence",
    "Where focus goes, energy flows",
    "Time bends to those who focus",
    "Focus is the path to mastery",
    "In stillness, we find focus",
    "Clarity through concentration",
    "Focus shapes reality",
    "The mind focused is a tool of creation",
    "To focus is to free the mind",
    "Focus is the key to unlocking the mind’s potential",
    "Through focus, the chaos becomes clarity",
    "A wandering mind finds no destination",
    "Only in stillness can true focus emerge",
    "Concentration is the path to self-mastery",
    "The more we focus, the more we achieve",
    "In focus, distractions dissolve",
    "Your attention shapes your reality",
    "Focus is the bridge between thought and action",
    "The quiet mind is the focused mind",
  ];

  
  const [quote, setQuote] = useState('');
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const changeQuote = () => {
      
      setFadeIn(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]); 
        setFadeIn(true);
      }, 1000); 
    };

    changeQuote();

    const intervalId = setInterval(changeQuote, 10000);

    return () => clearInterval(intervalId);
  }, [quotes]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FOCUSED</h1>
      <p className={`${styles.subtitle} ${fadeIn ? styles.fadeIn : ''}`}>{quote}</p> 
    </header>
  );
};

export default Header;

