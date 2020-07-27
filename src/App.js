import React, { useEffect } from 'react';
import Header from './components/header/header'
import Intro from './components/intro/intro'
import About from './components/about/about'
import backgroundIntro from './components/background-intro/background-intro'
import styles from './app.module.css';

function App() {
  useEffect(() => {
    backgroundIntro()
  }, [])
  
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
