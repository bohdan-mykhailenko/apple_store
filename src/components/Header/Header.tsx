import React from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation';
import { LanguageSelector } from '../LanguageSelector';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Navigation section="header" />
      <LanguageSelector />
    </header>
  );
};
