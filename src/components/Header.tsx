'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            {/* <span className={styles.iconBox}>L</span> */}
            <span className={styles.logoText}>LIVORA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.active}>Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog <ChevronDown size={14} /></Link></li>
          </ul>
        </nav>

        {/* Desktop Search Bar */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <div className={styles.categoryDropdown}>
            All Category <ChevronDown size={14} />
          </div>
          <button className={styles.searchButton}>
            <Search size={18} />
          </button>
        </div>

        {/* Action Icons */}
        <div className={styles.actions}>
          <button className={styles.mobileSearchIcon}>
            <Search size={20} />
          </button>
          <Link href="/login" className={styles.actionItem}>
            <User size={20} />
            <span className={styles.actionLabel}>Login</span>
          </Link>
          <Link href="/wishlist" className={styles.actionIcon}>
            <Heart size={20} />
          </Link>
          <Link href="/cart" className={styles.actionIcon}>
            <div className={styles.cartIconWrapper}>
              <ShoppingBag size={20} />
              <span className={styles.cartBadge}>0</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.menuOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className={styles.mobileDrawer}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className={styles.drawerHeader}>
                <div className={styles.logo}>
                  <span className={styles.iconBox}>L</span>
                  <span className={styles.logoText}>LIVORA</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className={styles.drawerSearch}>
                <input type="text" placeholder="Search furniture..." />
                <Search size={18} />
              </div>

              <nav className={styles.drawerNav}>
                <ul>
                  <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                  <li><Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
                  <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                  <li><Link href="/wishlist" onClick={() => setIsMenuOpen(false)}>My Wishlist</Link></li>
                  <li><Link href="/cart" onClick={() => setIsMenuOpen(false)}>My Cart</Link></li>
                </ul>
              </nav>

              <div className={styles.drawerFooter}>
                <p>Welcome to Livora Store</p>
                <Link href="/login" className={styles.drawerLogin} onClick={() => setIsMenuOpen(false)}>
                  Login / Register
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
