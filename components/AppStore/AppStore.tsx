// REACT
import { useState, useEffect } from "react";
// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { footer } from "../../translations/fr/footer";

const AppStore = () => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();
  // REACT STATE
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <a
      href="https://apple.co/35jrBTM"
      target="_blank"
      rel="noopener noreferrer"
      title={footer.col4.titleAppStore}
      // title={t("footer:col4.titleAppStore")}
    >
      <Image
        src="/images/logo/appStore.png"
        alt={footer.col4.altAppStore}
        // alt={t("footer:col4.altAppStore")}
        width={matches ? 140 : 240}
        height={matches ? 44 : 75}
        loading="eager"
      />
    </a>
  );
};

export default AppStore;
