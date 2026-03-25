'use client';

import React from 'react';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import PromoBanner from '@/components/PromoBanner';
import HotProducts from '@/components/HotProducts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <PromoBanner />
      <HotProducts />
      {/* <Footer /> */}
    </>
  );
}
