import React from 'react'
import styles from './works.module.css'
import Keyboard from '../../img/virtual-keyboard.gif'
import Weather from '../../img/weather.gif'
import MovieSearch from '../../img/movie-search.gif'
import English from '../../img/english-for-kids.gif'
import Rslang from '../../img/rslang.gif'

const worksArray = [
    {
        image: Keyboard,
        title: 'Virtual Keyboard',
        discription: 'connected with physical keyboard'
    },
    {
        image: Weather,
        title: 'Fancy Weather',
        discription: 'app for tracking weather anywhere'
    },
    {
        image: MovieSearch,
        title: 'Movie Search',
        discription: 'app for searching movies & games'
    },
    {
        image: English,
        title: 'English For Kids',
        discription: 'app for learning english for kids'
    },
    {
        image: Rslang,
        title: 'RS Lang',
        discription: 'big app for learning english created with the team of developers'
    }
]

export default () => {
    return (
        <div id='works' className={styles.worksContainer}>
            <div className={styles.worksTitle}>My works</div>
            <div className={styles.worksInner}>
                {worksArray.map(el =>
                    <div key={el.title} className={styles.workItem}>
                        <div className={styles.workTitle}>
                            <div>{el.title}</div>
                            <div>{el.discription}</div>
                        </div>
                        <img className={styles.workImg} src={el.image} alt=''></img>
                        {/* <div className={styles.workDiscription}>AAAAAAAAAAA</div> */}
                    </div>
                )}
            </div>
        </div>
    )
}