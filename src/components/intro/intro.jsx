import React, { useState, useEffect } from 'react'
import styles from './intro.module.css'
import { ReactComponent as N } from '../../img/N.svg'
import { CSSTransition } from 'react-transition-group'
import './intro-animation.css'

export default () => {
    const [inProp, setInProp] = useState(false);
    const [width, setWidth] = useState(1200)

    useEffect(() => {
        setInProp(true)
        setWidth(document.documentElement.clientWidth)
        console.log(document.documentElement.clientWidth)
    }, [])

    return (
        <div className={styles.introContainer}>
            <div className={styles.introInner}>
                <CSSTransition in={inProp} timeout={2000} classNames="name">
                    <div className={styles.introName}>Hi, I'm{width < 700 ? <br /> : ' '}<span><N /></span>astassia</div>
                </CSSTransition>
                <CSSTransition in={inProp} timeout={2000} classNames="surname">
                    <div className={styles.introSurname}>front-end developer</div>
                </CSSTransition>
                <a className={styles.contactButton} href='mailto:nastassianish@gmail.com'>Contact me</a>
            </div>
        </div>
    )
}
