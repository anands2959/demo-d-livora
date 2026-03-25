'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const banners = [
  '/images/banner-1.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
];

const slideConfigs = [
  { color: '#e6f5d5', borderRadius: '50%' },
  { color: '#fde2e4', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 40%' },
  { color: '#e0f2f1', borderRadius: '60% 40% 30% 70% / 50% 30% 70% 50%' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Large Number Background Overlay - Changed to static update per user request */}
        <div className={styles.numberBg}>
          0{currentSlide + 1}
        </div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.info}
          >
            <div className={styles.brandLine}>
              <span className={styles.brandSubtitle}>Livora furniture 2026</span>
            </div>

            <div className={styles.arrivalLine}>
              <span className={styles.newArrivals}>NEW ARRIVALS</span>
              <div className={styles.hLine}></div>
            </div>

            <h1 className={styles.title}>Spring <br /> Collection</h1>

            <button className={styles.btnPrimary}>
              Shop now <ArrowRight size={18} />
            </button>
          </motion.div>

          <div className={styles.visuals}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className={styles.slideWrapper}
              >
                {/* Dynamic Decorative Circle in Background */}
                <div
                  className={styles.decorativeCircle}
                  style={{
                    backgroundColor: slideConfigs[currentSlide].color,
                    borderRadius: slideConfigs[currentSlide].borderRadius
                  }}
                ></div>

                <Image
                  src={banners[currentSlide]}
                  alt={`Furniture Composition ${currentSlide + 1}`}
                  width={1000}
                  height={800}
                  className={styles.heroImage}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.pagination}>
          {banners.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
