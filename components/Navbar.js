'use client';
import { Search } from 'lucide-react';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>USwap</div>
      <div className={styles.searchBar}>
        <Search size={20} />
        <input type="text" placeholder="Search products..." />
      </div>
      <div className={styles.actions}>
        <button className={styles.login}>Login</button>
        <button className={styles.buyer}>Buyer</button>
      </div>
    </nav>
  );
}