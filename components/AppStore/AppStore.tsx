/* eslint-disable @next/next/no-img-element */

// TRANSLATION
import { useTranslation } from "next-i18next";

const AppStore = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <a
      href="https://apple.co/35jrBTM"
      target="_blank"
      rel="noopener noreferrer"
      title={t("footer:col4.titleAppStore")}
    >
      <img
        src="/images/logo/appStore.png"
        alt={t("footer:col4.altAppStore")}
        // width="125px"
        // height="40px"
      />
    </a>
  );
};

export default AppStore;
