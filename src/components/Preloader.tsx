'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  
  const preloadImages = [
    '/images/product-1.png',
    '/images/product-2.png',
    '/images/product-3.png',
  ];

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % preloadImages.length);
    }, 400);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(imgInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(20px)',
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        >
          <div className={styles.imageOverlay}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 0.15, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.bgImage}
              >
                <Image src={preloadImages[currentImg]} alt="Loading..." fill style={{ objectFit: 'contain' }} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.content}>
            <div className={styles.logoWrapper}>
              <motion.div 
                className={styles.logo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className={styles.logoText}>LIVORA</span>
              </motion.div>
              <motion.div 
                className={styles.line}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p 
              className={styles.tagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Exquisite Furniture for Modern Living
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
