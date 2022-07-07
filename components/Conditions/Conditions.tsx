// TRANSLATION
import { useTranslation } from "next-i18next";
// NEXT
import Link from "next/link";
import { PATHS } from "../../enums/paths";

const Conditions = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <div className="footer__container">
      <h4 className="footer__title">{t("footer:col3.title")}</h4>
      <ul className="footer__links">
        <li className="footer__link">
          <Link href={PATHS.SECURITY}>
            <a>{t("navigation:security")}</a>
          </Link>
        </li>
        <li className="footer__link">
          <Link href={PATHS.CGU}>
            <a>{t("navigation:CGU")}</a>
          </Link>
        </li>
        <li className="footer__link">
          <Link href={PATHS.CGV}>
            <a>{t("navigation:CGV")}</a>
          </Link>
        </li>
        <li className="footer__link">
          <Link href={PATHS.LEGAL_MENTIONS}>
            <a>{t("navigation:legales")}</a>
          </Link>
        </li>
        <li className="footer__link">
          <Link href={PATHS.PRIVACY_POLICY}>
            <a>{t("navigation:privacy")}</a>
          </Link>
        </li>
        <li className="footer__link">
          <Link href={PATHS.COOKIES}>
            {/* <Link href="https://www.teamdoc.fr/politiquedecookie"> */}
            <a>{t("navigation:cookies")}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Conditions;
