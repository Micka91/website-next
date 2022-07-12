// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderCookies = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="cookies__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__cookies"
      >
        <h1 className="cookies__title">{t("cookies:header")}</h1>
      </Background>
    </section>
  );
};

export default HeaderCookies;
