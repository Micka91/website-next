// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// COMPONENTS
import Background from "../../Background/Background";
import { namespaces } from "../../../utils/namespaces";

const HeaderContact = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="support__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__support"
      >
        <h1 className="support__title">{t("contact:title")}</h1>
        <p>{t("contact:text")}</p>
        <strong>{t("contact:strong")}</strong>
      </Background>
    </section>
  );
};

interface Iprops {
  locale: string;
}

export const getStaticProps = async ({ locale }: Iprops) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
    },
  };
};

export default HeaderContact;
