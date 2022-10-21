// TRANSLATION
// import { useTranslation } from "next-i18next";
import { footer } from "../../translations/fr/footer";

const Copyright = () => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();

  return (
    <div className="footer__copyright">
      Copyright {new Date().getFullYear()} &copy; {footer.copyright}
      {/* Copyright {new Date().getFullYear()} &copy; {t("footer:copyright")} */}
    </div>
  );
};

export default Copyright;
