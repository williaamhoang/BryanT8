import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png" 
          alt="Steam Clone Logo"
          width={50} 
          height={20} 
        />
      </div>

      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Store
        </a>
        <a href="#" className={styles.navLink}>
          Library
        </a>
        <a href="#" className={styles.navLink}>
          Support
        </a>
      </nav>

      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
        />
      </div>

      <div className={styles.profile}>
        <button className={styles.profileButton}>Login</button>
      </div>
    </header>
  );
};

export default Header;
