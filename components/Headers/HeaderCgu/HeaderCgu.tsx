// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderCgu = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();
  return (
    <section className="cgu__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgu teamdoc"
        className="header__cgu"
      >
        <h1 className="cgu__title">{t("cgu:header")}</h1>
      </Background>
    </section>
  );
};

export default HeaderCgu;
