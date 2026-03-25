'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Star, Heart, Share2, Minus, Plus, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductBySlug } from '@/data/products';
import styles from './ProductDetails.module.css';

// Custom SVG Icons
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
);

const ProductDetailsPage = () => {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <div className="container">Product not found</div>;

  // Mock additional images for slider
  const images = [
    product.image,
    '/images/product-2.png',
    '/images/product-3.png',
    '/images/product-4.png'
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.breadcrumb}>
          Home / {product.category} / {product.name}
        </div>

        <div className={styles.content}>
          <div className={styles.gallery}>
            <div className={styles.sliderWrapper}>
              <div className={styles.mainImage}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={styles.imageContainer}
                  >
                    <Image src={images[activeImg]} alt={product.name} width={600} height={600} priority />
                  </motion.div>
                </AnimatePresence>
                
                <button 
                  className={`${styles.navBtn} ${styles.prev}`}
                  onClick={() => setActiveImg(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className={`${styles.navBtn} ${styles.next}`}
                  onClick={() => setActiveImg(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className={styles.thumbnails}>
                {images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.thumbnail} ${activeImg === idx ? styles.activeThumbnail : ''}`}
                    onClick={() => setActiveImg(idx)}
                  >
                    <Image src={img} alt={`Thumb ${idx}`} width={80} height={80} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{product.name}</h1>
            
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < product.rating ? "#FFB800" : "none"} stroke={i < product.rating ? "#FFB800" : "#ddd"} />
              ))}
              <span className={styles.reviewCount}>(2 customer reviews)</span>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.price}>{product.price}</span>
              {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
            </div>

            <p className={styles.description}>
              {product.description}
            </p>

            <div className={styles.options}>
              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Size</span>
                <div className={styles.sizeSelector}>
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className={styles.sizeBtn}>{size}</button>
                  ))}
                </div>
              </div>

              <div className={styles.optionGroup}>
                <span className={styles.optionLabel}>Quantity</span>
                <div className={styles.quantitySelector}>
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><Minus size={16} /></button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)}><Plus size={16} /></button>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.addToCart}>
                ADD TO CART
              </button>
              <button className={styles.wishlist}><Heart size={20} /></button>
            </div>

            <div className={styles.footer_meta}>
              <div className={styles.meta}>
                <span>Category: <strong>{product.category}</strong></span>
                <span>Slug: <strong>{product.slug}</strong></span>
              </div>
              
              <div className={styles.share}>
                <span>Share:</span>
                <FacebookIcon />
                <TwitterIcon />
                <MailIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section */}
        <div className={styles.tabsSection}>
          <div className={styles.tabHeaders}>
            <button className={`${styles.tabHeader} ${styles.activeTab}`}>Description</button>
            <button className={styles.tabHeader}>Precaution</button>
            <button className={styles.tabHeader}>Reviews (2)</button>
          </div>
          <div className={styles.tabContent}>
            <p>
              This {product.name} is designed with the highest standards of quality and aesthetics. 
              The materials used are ethically sourced and processed to ensure longevity and comfort.
            </p>
            <ul className={styles.featuresList}>
              <li>Premium quality {product.category} item</li>
              <li>Sleek and modern design language</li>
              <li>Durable construction for long-term use</li>
              <li>Easy to clean and maintain</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className={styles.relatedSection}>
          <h2 className={styles.sectionTitle}>Related Products</h2>
          <div className={styles.relatedGrid}>
            {/* Show first 4 products as related for demo purposes */}
            {require('@/data/products').products.slice(0, 4).map((p: any) => (
              <div key={p.id} className={styles.relatedCard}>
                <Image src={p.image} alt={p.name} width={200} height={200} />
                <h3>{p.name}</h3>
                <span>{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
