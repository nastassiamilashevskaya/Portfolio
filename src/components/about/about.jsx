import React from 'react'
import styles from './about.module.css'
import Avatar from '../../img/avatar.jpg'

export default () => {
    return (
        <div id='about' className={styles.aboutContainer}>
            <div className={styles.aboutInner}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutTitle}>About me</div>
                    <div className={styles.aboutText}>
                    I'm Nastassia Milashevskaya, a student of BSUIR (since 2018), The Faculty of Information Technologies 
                    and Control. My department is Information Technologies in Automated Systems.
                    I've completed Rolling Scopes School and have an experience with HTML, CSS, 
                    CSS-preprocessors (Less, Sass), TypeScript,
                    React js, Webpack, Jest, Git. English level A2-B1. You can see my works below.
                    </div>
                </div>
                <img className={styles.aboutAvatar} src={Avatar} alt='' />
            </div>
        </div>
    )
}