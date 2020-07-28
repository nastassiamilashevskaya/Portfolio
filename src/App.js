import React, { useEffect } from 'react';
import Header from './components/header/header'
import Intro from './components/intro/intro'
import About from './components/about/about'
import backgroundIntro from './components/background-intro/background-intro'
import styles from './app.module.css';
import Works from './components/works/works';
import Contact from './components/contact/contact'

function App() {
  useEffect(() => {
    backgroundIntro()
  }, [])
  
  return (
    <div id='home' className={styles.container}>
      <Header />
      <Intro />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
