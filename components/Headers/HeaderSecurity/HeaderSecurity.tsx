// TRANSLATION
// import { useTranslation } from "next-i18next";
import { security } from "../../../translations/fr/security";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderSecurity = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <section className="security__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__security"
      >
        <h1 className="security__title">{security.title}</h1>
        <p>{security.texte1}</p>
        <p>{security.texte2}</p>
        {/* <h1 className="security__title">{t("security:title")}</h1>
        <p>{t("security:texte1")}</p>
        <p>{t("security:texte2")}</p> */}
      </Background>
    </section>
  );
};

export default HeaderSecurity;
