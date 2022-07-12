// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderJoinUS = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="support__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__support"
      >
        <h1 className="support__title">{t("joinUs:title")}</h1>
      </Background>
    </section>
  );
};

export default HeaderJoinUS;
