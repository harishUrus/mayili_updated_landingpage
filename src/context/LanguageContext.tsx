import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "ta" | "en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "mayili-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "ta";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "ta" ? stored : "ta";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "ta" ? "ta" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore storage errors */
    }
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === "ta" ? "en" : "ta"));

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
