// TRANSLATION
import { useTranslation } from "next-i18next";
// NEXT
import Link from "next/link";
import { PATHS } from "../../enums/paths";

const Informations = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <div className="footer__container">
      <h4 className="footer__title">{t("footer:col2.title")}</h4>
      <ul className="footer__links">
        <li className="footer__link">
          <Link href={PATHS.SUPPORT}>
            <a>{t("navigation:support")}</a>
          </Link>
        </li>
        <li className="footer__link">
          <Link href={PATHS.JOIN_US}>
            <a>{t("navigation:joinUs")}</a>
          </Link>
        </li>
        <li className="footer__link"></li>
      </ul>
    </div>
  );
};

export default Informations;
