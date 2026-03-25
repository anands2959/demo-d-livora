'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './CategorySection.module.css';

const categories = [
  { id: 1, name: 'Dining Chair', image: '/images/cat-chair.png', count: 200 },
  { id: 2, name: 'Sofas', image: '/images/cat-sofa.png', count: 150 },
  { id: 3, name: 'Table', image: '/images/cat-table.png', count: 120 },
];

const CategorySection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.categoryGrid}>
          <div className={styles.titleCard}>
            <h2 className={styles.title}>Shop <br /> by categories</h2>
            <div className={styles.stats}>

              <div>
                <span className={styles.number}>200+</span>
                <span className={styles.label}>Unique products</span>
              </div>
            </div>
            <a href="/categories" className={styles.link}>ALL CATEGORIES +</a>
          </div>

          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -10 }}
              className={styles.catCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={250}
                  height={250}
                  className={styles.image}
                  onError={(e) => {
                    // Fallback for missing images
                    (e.target as any).src = "https://via.placeholder.com/250?text=" + cat.name;
                  }}
                />
              </div>
              <h3 className={styles.catName}>{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
