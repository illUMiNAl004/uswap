'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './Banner.module.css';

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const banners = [
    { image: '/images/banner.jpeg', title: 'UMass Resource Sharing Hub', description: 'Find what you love, love what you find!' },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <button className={styles.arrowBtn} onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <div className={styles.slideContent}>
        <div className={styles.bannerImage}>
          <Image
            src={banners[currentSlide].image}
            alt={banners[currentSlide].title}
            width={800}
            height={400}
            objectFit="cover"
            priority
          />
          <div className={styles.textOverlay}>
            <h2>{banners[currentSlide].title}</h2>
            <p>{banners[currentSlide].description}</p>
          </div>
        </div>
      </div>
      <button className={styles.arrowBtn} onClick={nextSlide}>
        <ChevronRight />
      </button>
    </div>
  );
}
