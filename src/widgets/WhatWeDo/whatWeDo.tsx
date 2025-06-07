"use client"

import React from 'react';
import style from './whatWeDo.module.scss'
import Swiper from '../Swiper/Swiper';

const WhatWeDo = () => {
    return (
        <div className={style.container}>
            <h2 className={style.sectionTitle}>What we do?</h2>
            <div className={style.sectionDescr}>
                <p className={style.sectionDescrText}>YouTube Highlights</p>
                <p className={style.sectionDescrText}>longform → shortform</p>
                <p className={style.sectionDescrText}>Editing packages for recurring clients</p>
                <p className={style.sectionDescrText}>Content ideation & creative support</p>
                <p className={style.sectionDescrText}>UGC-style ads</p>
                <p className={style.sectionDescrText}>Thumbnail & title optimization</p>``
            </div>
            <Swiper />
        </div>
        
    );
};

export default WhatWeDo;