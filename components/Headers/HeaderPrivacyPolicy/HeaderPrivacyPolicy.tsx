// TRANSLATION
// import { useTranslation } from "next-i18next";
import { privacy } from "../../../translations/fr/privacy";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderPrivacyPolicy = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <section className="privacy__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__privacy"
      >
        <h1 className="privacy__title">{privacy.header}</h1>
        {/* <h1 className="privacy__title">{t("privacy:header")}</h1> */}
      </Background>
    </section>
  );
};

export default HeaderPrivacyPolicy;
