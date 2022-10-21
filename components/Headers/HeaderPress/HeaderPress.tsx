// TRANSLATION
// import { useTranslation } from "next-i18next";
import { press } from "../../../translations/fr/press";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderPress = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <section className="press__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__press"
      >
        <h1 className="press__title">{press.title}</h1>
        {/* <h1 className="press__title">{t("press:title")}</h1> */}
        <p className="press__paragraph">
          {press.text} {/* {t("press:text")}{" "} */}
          <a href="mailto:apolline@teamdoc.fr">apolline@teamdoc.fr</a>
        </p>
      </Background>
    </section>
  );
};

export default HeaderPress;
