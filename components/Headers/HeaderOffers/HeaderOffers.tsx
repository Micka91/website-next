// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderOffers = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="offers__header">
      <Background
        src="/images/headers/offers.svg"
        alt="Image de fond cgv teamdoc"
        className="header__offers"
      >
        <h1 className="offers__title">{t("offers:title")}</h1>
      </Background>
    </section>
  );
};

export default HeaderOffers;
