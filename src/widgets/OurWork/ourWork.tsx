"use client";

import React from "react";
import styles from "./ourWork.module.scss";

const OurWorkSection = () => {
  return (
    <section className={styles.ourWork}>
        <div className={styles.container}>
                  <h2 className={styles.title}>Our Work</h2>
      <p className={styles.subtitle}>
        We don’t just cut videos — we make them work.
      </p>


         <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/video-1.png" alt="Video 1" />
          <div className={styles.duration}>HD 1:20</div>
          <div className={styles.playButton}>
            <svg width="48" height="48" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#A367F9" />
              <polygon points="40,35 70,50 40,65" fill="#fff" />
            </svg>
          </div>
        </div>

        <div>
          <div className={styles.card}>
            <img src="/video-2.png" alt="Video 2" />
            <div className={styles.duration}>HD 1:20</div>
            <div className={styles.playButton}>
              <svg width="48" height="48" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#A367F9" />
                <polygon points="40,35 70,50 40,65" fill="#fff" />
              </svg>
            </div>
          </div>

          <div className={styles.card}>
            <img src="/video-3.png" alt="Video 3" />
            <div className={styles.duration}>HD 1:20</div>
            <div className={styles.playButton}>
              <svg width="48" height="48" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="#A367F9" />
                <polygon points="40,35 70,50 40,65" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/video-4.png" alt="Video 4" />
          <div className={styles.duration}>HD 1:20</div>
          <div className={styles.playButton}>
            <svg width="48" height="48" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="#A367F9" />
              <polygon points="40,35 70,50 40,65" fill="#fff" />
            </svg>
          </div>
        </div>
      </div>


      <button className={styles.button}>Look more</button>
        </div>
    </section>
  );
};

export default OurWorkSection;
