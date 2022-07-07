/* eslint-disable @next/next/no-img-element */

// TRANSLATION
import { useTranslation } from "next-i18next";

const GooglePlay = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <a
      href="https://apple.co/35jrBTM"
      target="_blank"
      rel="noopener noreferrer"
      title={t("footer:col4.titleGooglePlay")}
    >
      <img
        src="/images/logo/googlePlay.png"
        alt={t("footer:col4.altGooglePlay")}
      />
    </a>
  );
};

export default GooglePlay;
