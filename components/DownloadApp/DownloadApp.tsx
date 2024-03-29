// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import AppButton from "./../AppButton/AppButton";

const DownloadApp = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <div className="footer__container">
      <h4 className="footer__title">{t("footer:col4.title")}</h4>
      <p className="footer__paragraph">{t("footer:col4.p")}</p>
      <div className="footer__buttons">
        {/* APPSTORE */}
        <AppButton
          href="https://apple.co/35jrBTM"
          title={t("footer:col4.titleAppStore")}
          src="/images/logo/appStore.png"
          alt={t("footer:col4.altAppStore")}
        />
        {/* GOGLEPLAY */}
        <AppButton
          href="https://bit.ly/2nzXBC6"
          title={t("footer:col4.titleGooglePlay")}
          src="/images/logo/googlePlay.png"
          alt={t("footer:col4.altGooglePlay")}
        />
      </div>
    </div>
  );
};

export default DownloadApp;
