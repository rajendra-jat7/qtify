import React from 'react';
import styles from './Header.module.css';
import {ReactComponent as HeroImage} from '../../assets/Hero_Image.svg';

const Header = () => {
  return (
    <div className={styles.headerContianer}>
      <div className={styles.headerInfo}>
        <p className={styles.headerP}>
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </p>
      </div>
      <div className={styles.headerImg}>
        <HeroImage/>
      </div>
    </div>
  );
};

export default Header
