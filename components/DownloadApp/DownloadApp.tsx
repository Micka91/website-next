// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import AppStore from "./../AppStore/AppStore";
import GooglePlay from "./../GooglePlay/GooglePlay";

const DownloadApp = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <div className="footer__container">
      <h4 className="footer__title">{t("footer:col4.title")}</h4>
      <p className="footer__paragraph">{t("footer:col4.p")}</p>
      <div className="footer__buttons">
        <AppStore />
        <GooglePlay />
      </div>
    </div>
  );
};

export default DownloadApp;
