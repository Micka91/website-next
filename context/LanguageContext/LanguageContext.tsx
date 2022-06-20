import { useRouter } from "next/router";
import { useState, useEffect, createContext } from "react";

export const LanguagesContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

const LanguageProvider = ({ children }: IProps) => {
  // REACT STATE
  const [lang, setLang] = useState("FR");
  // NEXT HOOK
  const router = useRouter();

  useEffect(() => {
    if (window) {
      if (window.navigator.language !== "fr-FR") setLang("EN");
    }
  }, [router]);

  return (
    <LanguagesContext.Provider value={lang}>
      {children}
    </LanguagesContext.Provider>
  );
};

export default LanguageProvider;
