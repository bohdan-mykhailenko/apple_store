import Link from 'next/link';
import React from 'react';

interface NavigationProps {
  component: string;
}

export const Navigation: React.FC<NavigationProps> = ({ component }) => {
  const headerLinks = ['Home', 'Products', 'Entertainment', 'Support'];
  const footerLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Sales and Refunds',
    'Legal',
    'Site Map',
  ];

  const links = component === 'header' ? headerLinks : footerLinks;

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
