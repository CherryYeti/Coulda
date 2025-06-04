import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "ja";

const translations = {
  en: {
    viewSource: "View Source",
    compatibility: "Compatibility",
    discord: "Discord",
    duckstation: "DuckStation",
    description:
      "DuckStation is a PS1 Emulator aiming for the best accuracy and game support.",
    downloads: "View all downloads here!",
  },
  ja: {
    viewSource: "ソースを見る",
    compatibility: "互換性",
    discord: "ディスコード",
    duckstation: "ダックステーション",
    description:
      "ダックステーションはPS1エミュレーターであり、最高の精度とゲームサポートを目指しています。",

    downloads: "すべてのダウンロードはこちら！",
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)["en"];
}>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
