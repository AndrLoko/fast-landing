import React from 'react';
import style from './navigation.module.scss'

const navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.logo}>
                <img src="/logo.png" alt="" className={style.logoImage} />
                <h2 className={style.logoText}>CutLine</h2>
            </div>
            <div className={style.links}>
                <ul className={style.list}>
                    <li className={style.listItem}><a href={style.listLink}>Services</a></li>
                    <li className={style.listItem}><a href={style.listLink}>Portfolio</a></li>
                    <li className={style.listItem}><a href={style.listLink}>Contacts</a></li>
                </ul>
                <button className={style.button}>Get a quote</button>
            </div>
        </div>
    );
};

export default navigation;