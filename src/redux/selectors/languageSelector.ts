import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const languageSelector = (state: RootState) => state.language.language;

export const selectLanguage = createSelector(
  [languageSelector],
  (Language) => Language,
);
