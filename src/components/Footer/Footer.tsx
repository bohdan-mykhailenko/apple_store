import React from 'react';
import { Navigation } from '../Navigation';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <Navigation section="footer" />
    </div>
  );
};
