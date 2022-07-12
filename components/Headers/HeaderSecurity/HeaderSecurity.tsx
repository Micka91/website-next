// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderSecurity = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="security__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__security"
      >
        <h1 className="security__title">{t("security:title")}</h1>
        <p>{t("security:texte1")}</p>
        <p>{t("security:texte2")}</p>
      </Background>
    </section>
  );
};

export default HeaderSecurity;
