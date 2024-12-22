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

      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
        />
      </div>

    </header>
  );
};

export default Header;
