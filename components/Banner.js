'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Banner.module.css';  // Note the correct file name

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      image: './images/store.jpg',  // Using placeholder image for now
      title: 'UMass Store',
      description: 'Find what you love, love what you find'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className={styles.banner}>
      <button className={styles.arrowBtn} onClick={prevSlide}>
        <ChevronLeft />
      </button>
      <div className={styles.slideContent}>
        <div className={styles.bannerImage}>
          <img 
            src={banners[currentSlide].image} 
            alt={banners[currentSlide].title}
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