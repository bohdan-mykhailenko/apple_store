import { selectLanguage } from '@/redux/selectors/languageSelector';
import translations from '../translations/en-ua.json';
import { useAppSelector } from '@/redux/hooks';
import { TranslationData } from '@/types/TranslationData';

export const getTranslation = (component: string, section?: string) => {
  const currentLanguage = useAppSelector(selectLanguage);
  const translationData: TranslationData = translations[currentLanguage];

  const componentTranslations = translationData[component];

  if (section) {
    const sectionTranslations = componentTranslations[section];

    return sectionTranslations;
  }

  return componentTranslations;
};
