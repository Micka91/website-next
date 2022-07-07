// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// COMPONENTS
import Background from "../../Background/Background";
import { namespaces } from "./../../../utils/namespaces";

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

export default HeaderCookies;
