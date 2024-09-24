import React, { useEffect, useState, useMemo } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {

  const quotes = useMemo(() => [
   "The successful warrior is the average man, with laser-like focus - Bruce Lee",
    "To do two things at once is to do neither - Publilius Syrus",
    "It is not enough to be busy; so are the ants. The question is: What are we busy about? - Henry David Thoreau",
    "Concentration is the secret of strength - Ralph Waldo Emerson",
    "Wherever you are, be all there - Jim Elliot",
    "The shorter way to do many things is to do only one thing at a time - Mozart",
    "Do every act of your life as though it were the very last act of your life - Marcus Aurelius",
    "To be everywhere is to be nowhere - Seneca",
    "Success demands singleness of purpose - Vince Lombardi",
    "He who has a why to live can bear almost any how - Friedrich Nietzsche",
    "You can’t depend on your eyes when your imagination is out of focus - Mark Twain",
    "The main thing is to keep the main thing the main thing - Stephen Covey",
    "Simplicity is the ultimate sophistication - Leonardo da Vinci",
    "What we are today comes from our thoughts of yesterday, and our present thoughts build our life of tomorrow - Buddha",
    "Concentration and mental toughness are the margins of victory - Bill Russell",
    "Most people have no idea of the giant capacity we can immediately command when we focus all of our resources on mastering a single area of our lives - Tony Robbins",
    "It's not that I'm so smart, it's just that I stay with problems longer. - Albert Einstein",
    "Beware the barrenness of a busy life. - Socrates",
    "Focus is more important than genius in the creative process - Catherine Pulsifer",
    "One cannot manage too many affairs: like pumpkins in the water, one pops up while you try to hold down the other - Chinese Proverb",
    "The monotony and solitude of a quiet life stimulates the creative mind - Albert Einstein",
    "When walking, walk. When eating, eat - Zen Proverb",
    "Success comes from focusing on what you do best, not from trying to do everything well - Gary Keller",
    "True genius resides in the capacity for evaluation of uncertain and conflicting information - Winston Churchill",
    "Time and focus are your most valuable assets - Naval Ravikant",
    "The ability to focus attention on important things is a defining characteristic of intelligence - Robert J. Shiller",
    "Discipline is the bridge between goals and accomplishment - Jim Rohn",
    "You cannot depend on your eyes when your imagination is out of focus - Mark Twain",
    "I learned that focus is the key. Not just in your running a company, but in your personal life as well - Tim Cook",
    "The more you lose yourself in something bigger than yourself, the more energy you will have - Norman Vincent Peale",
    "Focus on where you want to go, not on what you fear - Tony Robbins",
    "Focus means eliminating distractions, not just from others but also from ourselves - Anonymous",
    "I learned long ago the importance of focusing on things you can control and letting go of things you can't - Anonymous",
    "The successful people are those who are able to focus their attention on what is truly important - Brian Tracy",
    "What we focus on, we become - Oprah Winfrey",
    "Focus is a matter of deciding what things you're not going to do - John Carmack",
    "Success requires an immense amount of focus and discipline - Robin Sharma",
    "Your future is created by what you do today, not tomorrow - Robert Kiyosaki",
    "The ability to concentrate and use time well is everything - Lee Iacocca",
    "Energy flows where attention goes - Tony Robbins",
    "Only through focus can you do world-class things, no matter how capable you are - Bill Gates",
    "My success, part of it certainly, is that I have focused in on a few things - Bill Gates",
    "It's only by saying no that you can concentrate on the things that are really important - Steve Jobs",
    "I learned that if you want to make it bad enough, no matter how bad it is, you can make it - Gale Sayers",
    "Lack of direction, not lack of time, is the problem. We all have 24-hour days - Zig Ziglar",
    "Successful people maintain a positive focus in life no matter what is going on around them - Jack Canfield" 
  ], []);

  
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
      <h1 className={styles.title}>- FOCUSED -</h1>
      <p className={`${styles.subtitle} ${fadeIn ? styles.fadeIn : ''}`}>{quote}</p> 
    </header>
  );
};

export default Header;

