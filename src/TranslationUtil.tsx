import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Arabic from "./assets/Locales/ar/translation.json";
import English from "./assets/Locales/en/translation.json";

const resources = {
  en: {
    translation: English,
  },
  ar: {
    translation: Arabic,
  },
};
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "htmlTag"],
      caches: ["localStorage"],
    },
  });
