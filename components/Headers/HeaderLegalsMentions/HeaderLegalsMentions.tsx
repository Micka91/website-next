// TRANSLATION
// import { useTranslation } from "next-i18next";
import { legalsmentions } from "../../../translations/fr/legalsmentions";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderLegalsMentions = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <section className="legalsMentions__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__legalsMentions"
      >
        <h1 className="legalsMentions__title">{legalsmentions.header}</h1>
        {/* <h1 className="legalsMentions__title">{t("legalsmentions:header")}</h1> */}
      </Background>
    </section>
  );
};

export default HeaderLegalsMentions;
