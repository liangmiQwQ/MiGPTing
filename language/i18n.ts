import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./en_US.json";
import zh_CN from "./zh_CN.json";

const resources = {
  en_US: { translation: en_US },
  zh_CN: { translation: zh_CN },
};

function createI18n(lang: "zh_CN" | "en_US") {
  return i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: "en_US",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default createI18n;
