// Created by add_section_from_catalog (HeroOverlay).

import React from 'react';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroOverlay
        primaryButton={{"text":"Get My Free Website Audit","href":"#contact"}}
        imageSrc="https://picsum.photos/seed/490957296/1200/800"
        secondaryButton={{"href":"#portfolio","text":"See My Work"}}
        title="Your Website Should Bring You Customers—Not Drive Them Away"
        description="I build beautiful, high-converting websites for local businesses in as little as 24–48 hours. Fast, modern, mobile-friendly, and built to grow your business."
        tag="Made New Studio"
        textAnimation="fade-blur"
      />
    </div>
  );
}
