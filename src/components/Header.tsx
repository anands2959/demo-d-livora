'use client';

import React from 'react';
import Link from 'next/link';
import { Search, User, Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.iconBox}>D</span>
            <span className={styles.logoText}>LIVORA</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.active}>Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog <ChevronDown size={14} /></Link></li>
          </ul>
        </nav>

        {/* Search Bar */}
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
          <Link href="/login" className={styles.actionItem}>
            <User size={20} />
            <span>Login</span>
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
    </header>
  );
};

export default Header;
