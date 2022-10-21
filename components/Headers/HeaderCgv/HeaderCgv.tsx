// TRANSLATION
// import { useTranslation } from "next-i18next";
import { cgv } from "../../../translations/fr/cgv";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderCgv = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <section className="cgv__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__cgv"
      >
        <h1 className="cgv__title">{cgv.header}</h1>
        {/* <h1 className="cgv__title">{t("cgv:header")}</h1> */}
      </Background>
    </section>
  );
};

export default HeaderCgv;
