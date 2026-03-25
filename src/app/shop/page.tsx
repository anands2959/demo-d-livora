'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import styles from './Shop.module.css';

const ShopPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Living Room', 'Decor', 'Office', 'Bedroom'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className={styles.shopPage}>
      

      <div className="container">
        <div className={styles.controls}>
          <div className={styles.sorting}>
            <span>Showing {filteredProducts.length} items</span>
          </div>
          <div className={styles.sortOptions}>
            <select className={styles.select}>
              <option>Default sorting</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className={styles.shopLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Categories</h3>
              <ul className={styles.filterList}>
                {categories.map(cat => (
                  <li 
                    key={cat} 
                    className={`${styles.filterItem} ${filter === cat ? styles.active : ''}`}
                    onClick={() => setFilter(cat)}
                  >
                    <span>{cat}</span>
                    <span className={styles.count}>
                      {cat === 'All' ? products.length : products.filter(p => p.category === cat).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Filter by Color</h3>
              <div className={styles.colorGrid}>
                {['#000', '#fff', '#8B4513', '#696969', '#DEB887'].map(color => (
                  <div key={color} className={styles.colorCircle} style={{ background: color }}></div>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Price Range</h3>
              <div className={styles.priceSlider}>
                <input type="range" min="0" max="1000" className={styles.range} />
                <div className={styles.priceInputs}>
                  <span>$0 - $1000</span>
                </div>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Popular Tags</h3>
              <div className={styles.tags}>
                {['Modern', 'Wood', 'Fabric', 'Office', 'Luxury'].map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.productGrid}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
