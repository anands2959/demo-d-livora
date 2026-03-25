'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import styles from './HotProducts.module.css';

const HotProducts = () => {
  const [activeTab, setActiveTab] = useState('LATEST PRODUCTS');
  const tabs = ['LATEST PRODUCTS', 'TOP RATING', 'BEST SELLERS'];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Hot Products</h2>
          <div className={styles.tabs}>
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <a href="/shop" className={styles.allLink}>All products →</a>
        </div>

        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
