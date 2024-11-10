'use client';
import { useState, useEffect } from 'react';
import styles from './Categories.module.css';

export function Categories() {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  const categories = [
    'NEW PRODUCTS',
    'USED',
    'COLLECTIBLES & ANTIQUES',
    'CLOTHING',
    'FOOTWEAR',
    'ELECTRONICS',
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return static content if JS is disabled, ensuring no issues with missing client-side hooks
  if (!isClient) {
    return (
      <div className={styles.categories}>
        <h2>PRODUCT CATEGORIES</h2>
        <div className={styles.categoryTags}>
          {categories.map((category) => (
            <button key={category} className={styles.categoryTag}>
              #{category.toLowerCase().replace(/\s+/g, '')}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Client-side rendered content after JS hydration
  return (
    <div className={styles.categories}>
      <h2>PRODUCT CATEGORIES</h2>
      <div className={styles.categoryTags}>
        {categories.map((category) => (
          <button key={category} className={styles.categoryTag}>
            #{category.toLowerCase().replace(/\s+/g, '')}
          </button>
        ))}
      </div>
    </div>
  );
}
