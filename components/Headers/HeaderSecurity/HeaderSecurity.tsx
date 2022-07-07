// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// COMPONENTS
import Background from "../../Background/Background";
import { namespaces } from "../../../utils/namespaces";

const HeaderSecurity = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="security__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__security"
      >
        <h1 className="security__title">{t("security:title")}</h1>
        <p>{t("security:texte1")}</p>
        <p>{t("security:texte2")}</p>
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

export default HeaderSecurity;
