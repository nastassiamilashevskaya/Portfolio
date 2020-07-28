import React from 'react'
import styles from './contact.module.css'
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default () => {
    return (
        <div id='contact' className={styles.contactContainer}>
            <div className={styles.contactInner}>
                <div className={styles.contactTitle}>Contact me</div>
                <div className={styles.contacts}>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faDiscord} size='2x' />
                        <span>nastassiamilashevskaya#0803</span>
                    </div>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faTelegram} size='2x' />
                        <span><a href='https://t.me/Nastassianish'>Nastassianish</a></span>
                    </div>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faPhoneAlt} size='2x' />
                        <span>+375 (29) 5621038</span>
                    </div>
                    <div className={styles.contactItem}>
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                        <span><a href="mailto:nastassianish@gmail.com">nastassianish@gmail.com</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}