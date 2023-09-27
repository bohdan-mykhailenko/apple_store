'use client';

import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '@/redux/selectors/languageSelector';
import { getTranslation } from '@/helpers/getTranslation';

interface NavigationProps {
  section: string;
}

export const Navigation: React.FC<NavigationProps> = ({ section }) => {
  const links = getTranslation('navigation', section) as string[];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <Link href={link} key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
