import React from 'react';
import { ReactComponent as N } from '../../img/N.svg'
import styles from './header.module.css'

export default () => {
    const linkHandler = (name) => {
        const links = document.querySelector('#headerLinks')
        console.log(links.childNodes[0].classList)
        links.childNodes.forEach(el => {if (el.classList.contains(styles.active)) el.classList.remove(styles.active)})
        links.childNodes.forEach(el => {if (el.innerText === name) el.classList.add(styles.active)})
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInner}>
                <div className={styles.headerLogo}>
                    <N />
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