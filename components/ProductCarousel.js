'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'; // Import Image component from next/image
import styles from './ProductCarousel.module.css';

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      id: 1,
      title: 'iClicker',
      price: 45.00,
      image: '/images/iclicker.jpg' // Correct path
    },
    {
      id: 2,
      title: 'Calculus Textbook',
      price: 16.00,
      image: '/images/math.jpg' // Correct path
    },
    {
      id: 3,
      title: 'Used Blue Chair',
      price: 30.00,
      image: '/images/chair.jpeg' // Correct path
    },
    {
      id: 4,
      title: 'Danish Bicycle',
      price: 160.00,
      image: '/images/bike.jpg' // Correct path
    },
    {
      id: 5,
      title: 'Wooden Cupboard',
      price: 80.00,
      image: '/images/cupboard.jpg' // Correct path
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
            <Image
              src={product.image} // next/image to load the image
              alt={product.title}
              width={200} // Specify the width of the image
              height={200} // Specify the height of the image
              objectFit="cover" // Optional: ensures the image covers the given dimensions
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
