'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProductCarousel.module.css';

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      id: 1,
      title: 'Calculus Textbook',
      price: 16.00,
      image: './calc.jpg'
    },
    {
      id: 2,
      title: 'Physics Textbook',
      price: 16.00,
      image: '/api/placeholder/200/200'
    },
    {
      id: 3,
      title: 'Chemistry Textbook',
      price: 16.00,
      image: '/api/placeholder/200/200'
    },
    {
      id: 4,
      title: 'Biology Textbook',
      price: 16.00,
      image: '/api/placeholder/200/200'
    },
    {
      id: 5,
      title: 'English Textbook',
      price: 16.00,
      image: '/api/placeholder/200/200'
    }
  ];

  const nextProducts = () => {
    setCurrentIndex((prev) => 
      prev + 5 >= products.length ? 0 : prev + 5
    );
  };

  const prevProducts = () => {
    setCurrentIndex((prev) => 
      prev - 5 < 0 ? Math.max(products.length - 5, 0) : prev - 5
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrowBtn} onClick={prevProducts}>
        <ChevronLeft />
      </button>
      <div className={styles.productsContainer}>
        {products.slice(currentIndex, currentIndex + 5).map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} />
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