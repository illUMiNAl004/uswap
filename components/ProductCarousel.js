'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './ProductCarousel.module.css';

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const products = [
    { id: 1, title: 'iClicker', price: 45.0, image: '/images/iclicker.jpg' },
    { id: 2, title: 'Calculus Textbook', price: 16.0, image: '/images/math.jpg' },
    { id: 3, title: 'Used Blue Chair', price: 30.0, image: '/images/chair.jpeg' },
    { id: 4, title: 'Danish Bicycle', price: 160.0, image: '/images/bike.jpg' },
    { id: 5, title: 'Wooden Cupboard', price: 80.0, image: '/images/cupboard.jpg' },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextProducts = () => {
    setCurrentIndex((prev) => (prev + 5 >= products.length ? 0 : prev + 5));
  };

  const prevProducts = () => {
    setCurrentIndex((prev) => prev - 5 < 0 ? Math.max(products.length - 5, 0) : prev - 5);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.carousel}>
      <button className={styles.arrowBtn} onClick={prevProducts}>
        <ChevronLeft />
      </button>
      <div className={styles.productsContainer}>
        {products.slice(currentIndex, currentIndex + 5).map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              objectFit="cover"
              priority={product.id === 1}
            />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <button className={styles.arrowBtn} onClick={nextProducts}>
        <ChevronRight />
      </button>
    </div>
  );
}
