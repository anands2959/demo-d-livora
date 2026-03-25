'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import styles from '../../shop/Shop.module.css';

const CategoryPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  // Format slug to human readable category name (e.g., 'living-room' -> 'Living Room')
  const categoryName = slug.split('-').map(word => word.charAt(0) ? word.charAt(0).toUpperCase() + word.slice(1) : '').join(' ');

  const filteredProducts = products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className={styles.shopPage}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>{categoryName}</h1>
          <p className={styles.subtitle}>Discover our exclusive collection in {categoryName}.</p>
        </div>
      </header>

      <div className="container">
        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2>No products found in this category.</h2>
            <p>Check back soon or explore our other collections.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
