import React, { useRef } from 'react'
import styles from './works.module.css'
// import Keyboard from '../../img/virtual-keyboard.gif'
// import Weather from '../../img/weather.gif'
// import MovieSearch from '../../img/movie-search.gif'
// import English from '../../img/english-for-kids.gif'
// import Rslang from '../../img/rslang.gif'
// import Songbird from '../../img/songbird.gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Keyboard from '../../img/keyboard.jpg'
import Weather from '../../img/weather.jpg'
import MovieSearch from '../../img/movie-search.jpg'
import English from '../../img/english-for-kids.jpg'
import Rslang from '../../img/rs-lang.jpg'
import Songbird from '../../img/songbird.jpg'

const worksArray = [
    {
        image: Keyboard,
        title: 'Virtual Keyboard',
        discription: 'connected with physical keyboard',
        link: 'https://nastassiamilashevskaya.github.io/virtual-keybord/',
        github: 'https://github.com/nastassiamilashevskaya/virtual-keybord'
    },
    {
        image: Weather,
        title: 'Fancy Weather',
        discription: 'app for tracking weather wherever you want',
        link: 'https://nastassiamilashevskaya-fancy-weather.netlify.app/',
        github: 'https://github.com/nastassiamilashevskaya/Fancy-Weather'
    },
    {
        image: MovieSearch,
        title: 'Movie Search',
        discription: 'app for searching movies & games',
        link: 'https://nastassiamilashevskaya-movie-search.netlify.app/',
        github: 'https://github.com/nastassiamilashevskaya/Movie-Search'
    },
    {
        image: English,
        title: 'English For Kids',
        discription: 'app for learning english for kids',
        link: 'https://nastassiamilashevskaya-english-for-kids.netlify.app/',
        github: 'https://github.com/nastassiamilashevskaya/English-For-Kids'
    },
    {
        image: Rslang,
        title: 'RS Lang',
        discription: 'big app for learning english created with the team of developers, my scope: stats page, audio-call, sprint, memory game, train mode',
        link: 'https://rslang-team49-jelika.netlify.app/',
        github: 'https://github.com/MetaVII/rslang'
    },
    {
        image: Songbird,
        title: 'Songbird',
        discription: 'quess songs and score points',
        link: 'https://nastassiamilashevskaya-songbird.netlify.app/',
        github: 'https://github.com/nastassiamilashevskaya/songbird'
    }
]

export default () => {
    const chevronHandler = (event) => {
        event.target.parentNode.classList.toggle(`${styles.expanded}`)
        event.target.previousSibling.firstChild.lastChild.classList.toggle(`${styles.hidden}`)
    }
    return (
        <div id='works' className={styles.worksContainer}>
            <div className={styles.worksTitle}>My works</div>
            <div className={styles.worksInner}>
                {worksArray.map(el =>
                    <div key={el.title} className={styles.card}>
                        <a href={el.link}>
                            <img className={styles.label} src={el.image} height='200' width='250' alt={el.title} />
                        </a>
                        <div className={styles.text1}>
                            <div className={styles.text_content}>
                                <h2 className={styles.title}>{el.title}</h2>
                                <div className={styles.body_text}>{el.discription}</div>
                                <div className={`${styles.body_github} ${styles.hidden}`}>
                                    <a href={el.github}><FontAwesomeIcon color='rgb(150, 137, 128)' icon={faGithub} size='2x' /></a>
                                </div>
                            </div>
                        </div>
                        <svg className={styles.chevron} onClick={chevronHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" /></svg>
                    </div>
                )}
            </div>
        </div>
    )
}