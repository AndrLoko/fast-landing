import React from 'react';
import style from './header.module.scss'

const header = () => {
    return (
        <div className={style.hero}>
            <div className={style.container}>
                <div className={style.heroWrapper}>
                    <div>
                        <h1 className={style.heroTitle}>Your partner for <span className={style.heroTitleColor}>asynchronous video editing.</span></h1>
                        <p className={style.heroDescr}>For creators, brands, and digital entrepreneurs.</p>
                        <div className={style.buttonsList}>
                            <button className={style.buttonOne}>Get a quote</button>
                            <button className={style.buttonTwo}>Learn more</button>
                        </div>
                    </div>
                    <img src="/hero.jpg" alt="" className={style.heroImage} />  
                </div>
            </div>
        </div>
    );
};

export default header;