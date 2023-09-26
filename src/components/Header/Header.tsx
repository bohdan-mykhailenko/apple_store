import React from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Navigation component="header" />
    </header>
  );
};
