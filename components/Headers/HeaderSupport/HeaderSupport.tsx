// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderSupport = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="support__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__support"
      >
        <h1 className="support__title">{t("support:title")}</h1>
        <p>{t("support:text")}</p>
        <p>{t("support:text2")}</p>
      </Background>
    </section>
  );
};

export default HeaderSupport;
