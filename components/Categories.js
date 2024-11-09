import styles from './Categories.module.css';

export function Categories() {
  const categories = [
    'NEW PRODUCTS',
    'USED',
    'COLLECTIBLES & ANTIQUES',
    'CLOTHING',
    'FOOTWEAR',
    'ELECTRONICS'
  ];

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