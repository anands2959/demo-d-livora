'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './PromoBanner.module.css';

const PromoBanner = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.bannerGrid}>
          {/* Living Room Banner */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={styles.banner}
          >
            <div className={styles.imageOverlay}></div>
            <Image 
              src="/images/banner-living.png" 
              alt="Living Room" 
              fill
              className={styles.bgImage}
              onError={(e) => {
                (e.target as any).src = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className={styles.content}>
              <span className={styles.subtitle}>50% OFF ALL ORDER</span>
              <h2 className={styles.title}>Living Room</h2>
              <button className={styles.btn}>Shop now</button>
            </div>
            <div className={styles.borderBox}></div>
          </motion.div>

          {/* Dining Room Banner */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={styles.banner}
          >
            <div className={styles.imageOverlay}></div>
            <Image 
              src="/images/banner-dining.png" 
              alt="Dining Room" 
              fill
              className={styles.bgImage}
              onError={(e) => {
                (e.target as any).src = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className={styles.content}>
              <span className={styles.subtitle}>20% OFF ALL ORDER</span>
              <h2 className={styles.title}>Dining Room</h2>
              <button className={styles.btn}>Shop now</button>
            </div>
            <div className={styles.borderBox}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
