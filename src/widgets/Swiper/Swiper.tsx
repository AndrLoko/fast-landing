"use client"

import React from 'react';
import styles from './swiper.module.scss'; // Используем SCSS по желанию
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cardData = [
  {
    title: "YouTube Highlights",
    subtitle: "Short-form editing (TikTok / Reels)",
    text: "The Rough Cut Podcast features in-depth interviews with top film professionals.",
    link: "Watch now >",
    image: "/card-1.png",
  },
  {
    title: "longform → shortform",
    subtitle: "Work with form’s of your videos",
    text: "Hear how Emmy contenders craft the megahits.",
    link: "Watch now >",
    image: "/card-2.png",
  },
  {
    title: "UGC-style ads",
    subtitle: "Correct style in your projects",
    text: "Hear how Emmy contenders craft the megahits.",
    link: "Watch now >",
    image: "/card-3.png",
  },
  {
    title: "YouTube Highlights",
    subtitle: "Short-form editing (TikTok / Reels)",
    text: "The Rough Cut Podcast features in-depth interviews with top film professionals.",
    link: "Watch now >",
    image: "/card-1.png",
  },
  {
    title: "UGC-style ads",
    subtitle: "Correct style in your projects",
    text: "Hear how Emmy contenders craft the megahits.",
    link: "Watch now >",
    image: "/card-2.png",
  },
  {
    title: "UGC-style ads",
    subtitle: "Correct style in your projects",
    text: "Hear how Emmy contenders craft the megahits.",
    link: "Watch now >",
    image: "/card-3.png",
  }
];

const WhatWeDoSwiper = () => {
  return (
    <div className={styles.wrapper}>
        <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
            type: 'progressbar',
            el: '.custom-progressbar', 
        }}
        breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        >
        {cardData.map((card, index) => (
            <SwiperSlide key={index}>
            <div className={styles.card}>
                <img src={card.image} alt="" />
                <div className={styles.cardBody}>
                <h4 className={styles.title}>{card.title}</h4>
                <h5 className={styles.subtitle}>{card.subtitle}</h5>
                <p className={styles.desc}>{card.text}</p>
                <a className={styles.link} href="#">
                    {card.link}
                </a>
                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
        <div className={styles.progressbar} />

    </div>
    

  );
};

export default WhatWeDoSwiper;
