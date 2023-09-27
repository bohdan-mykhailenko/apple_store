'use client';

import React from 'react';
import { selectLanguage } from '@/redux/selectors/languageSelector';
import { Language } from '@/types/Language';
import { setLanguage } from '@/redux/features/language/languageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const LanguageSelector = () => {
  const currentLanguage = useAppSelector(selectLanguage);
  const dispatch = useAppDispatch();

  const handleLanguageChange = (value: Language) => {
    dispatch(setLanguage(value));
  };

  return (
    <div>
      <p>Current Language: {currentLanguage}</p>
      <button onClick={() => handleLanguageChange(Language.EN)}>English</button>
      <button onClick={() => handleLanguageChange(Language.UA)}>
        Ukrainian
      </button>
    </div>
  );
};
