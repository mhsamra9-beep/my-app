import translationEN from "./en/translation.json";
import translationAR from "./ar/translation.json";

export const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

export const languages = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "ar",
    label: "العربية",
  },
];
