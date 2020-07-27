import React from 'react';
import { ReactComponent as Logo } from '../../img/logo.svg'
import styles from './header.module.css'

export default () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInner}>
                <div className={styles.headerLogo}>
                    <Logo />
                </div>
                <div className={styles.headerLinks}>
                    <a href='#'>About</a>
                    <a href='#'>Works</a>
                    <a href='#'>Contact</a>
                </div>
            </div>
        </div>
    )
}