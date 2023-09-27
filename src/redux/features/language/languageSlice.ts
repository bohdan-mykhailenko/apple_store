import { Language } from '@/types/Language';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface languageState {
  language: Language;
}

const initialState: languageState = {
  language: Language.EN,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
