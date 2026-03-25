'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ProductCard.module.css';

interface ProductProps {
  slug: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  image: string;
  badge?: { text: string; type: 'sale' | 'hot' };
  timer?: string;
}

const ProductCard: React.FC<ProductProps> = ({ slug, name, price, oldPrice, rating, image, badge, timer }) => {
  return (
    <div className={styles.card}>
      <Link href={`/product/${slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          {badge && (
            <span className={`${styles.badge} ${badge.type === 'sale' ? styles.badgeSale : styles.badgeHot}`}>
              {badge.text}
            </span>
          )}
          <Image 
            src={image} 
            alt={name} 
            width={300} 
            height={300} 
            className={styles.image}
            onError={(e) => {
              (e.target as any).src = "https://via.placeholder.com/300?text=" + name;
            }}
          />
          
          <div className={styles.overlay}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className={styles.actions}
            >
              <button className={styles.actionBtn}><ShoppingCart size={18} /></button>
              <button className={styles.actionBtn}><Heart size={18} /></button>
              <button className={styles.actionBtn}><Eye size={18} /></button>
            </motion.div>
          </div>

          {timer && (
            <div className={styles.timer}>
              <span className={styles.timerLabel}>Ends in:</span>
              <span className={styles.timerValue}>{timer}</span>
            </div>
          )}
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < rating ? "#FFB800" : "none"} stroke={i < rating ? "#FFB800" : "#ddd"} />
          ))}
          <span className={styles.reviewCount}>(2 reviews)</span>
        </div>
        <Link href={`/product/${slug}`}>
          <h3 className={styles.name}>{name}</h3>
        </Link>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
