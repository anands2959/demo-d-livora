'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

// Custom SVG Icons to avoid lucide-react import issues
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1: Brand */}
        <div className={styles.column}>
          <h2 className={styles.logo}>LIVORA</h2>
          <p className={styles.description}>
            Elevate your living space with our curated collection of premium furniture. Craftsmanship, comfort, and timeless design for every corner of your home.
          </p>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialLink}><FacebookIcon /></Link>
            <Link href="#" className={styles.socialLink}><TwitterIcon /></Link>
            <Link href="#" className={styles.socialLink}><InstagramIcon /></Link>
            <Link href="#" className={styles.socialLink}><YoutubeIcon /></Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.list}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Categories</h3>
          <ul className={styles.list}>
            <li><Link href="/categories/living-room">Living Room</Link></li>
            <li><Link href="/categories/dining-room">Dining Room</Link></li>
            <li><Link href="/categories/bedroom">Bedroom</Link></li>
            <li><Link href="/categories/office">Office</Link></li>
            <li><Link href="/categories/decor">Decor</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Newsletter</h3>
          <p className={styles.text}>Subscribe to get special offers and once-in-a-lifetime deals.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Your email address" className={styles.input} />
            <button type="submit" className={styles.button}>Subscribe</button>
          </form>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MailIcon /> <span>hello@livora.com</span>
            </div>
            <div className={styles.contactItem}>
              <MapPinIcon /> <span>123 Design St, NY 10001</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>© 2026 LIVORA Furniture Store. All Rights Reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

        {/* Large Background Text requested by user */}
        <div className={styles.bgText}>LIVORA</div>
      </div>
    </footer>
  );
};

export default Footer;
