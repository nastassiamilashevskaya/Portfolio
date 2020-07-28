import React, { useEffect, useState } from 'react';
import { ReactComponent as N } from '../../img/N.svg'
import styles from './header.module.css'

export default () => {
    const [headerColor, setHeaderColor] = useState('transparent')

    const linkHandler = (name) => {
        const links = document.querySelector('#headerLinks')
        links.childNodes.forEach(el => {if (el.classList.contains(styles.active)) el.classList.remove(styles.active)})
        links.childNodes.forEach(el => {if (el.innerText === name) el.classList.add(styles.active)})
    }

    const listenScrollEvent = e => {
        if (window.scrollY > 250) {
          setHeaderColor('#b3b3b3')
          if (window.scrollY > 691 && window.scrollY < 1011) {
            linkHandler('About')
          } else if (window.scrollY >= 1011 && window.scrollY < 1316) {
            linkHandler('Works')
          } else if (window.scrollY >= 1316) {
            linkHandler('Contact')
          }
        } else {
          setHeaderColor('transparent')
          linkHandler('home')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    return (
        <div className={styles.headerContainer} style={ {backgroundColor: headerColor}}>
            <div className={styles.headerInner}>
                <div className={styles.headerLogo}>
                    <a href='#home'><N /></a>
                </div>
                <div id='headerLinks' onClick={(event) => linkHandler(event.target.innerText)} className={styles.headerLinks}>
                    <a className={styles.headerLink} href='#about'>About</a>
                    <a className={styles.headerLink} href='#works'>Works</a>
                    <a className={styles.headerLink} href='#contact'>Contact</a>
                </div>
            </div>
        </div>
    )
}