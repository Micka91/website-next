// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// COMPONENTS
import Background from "../../Background/Background";
import { namespaces } from "./../../../utils/namespaces";

const HeaderPrivacyPolicy = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="privacy__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__privacy"
      >
        <h1 className="privacy__title">{t("privacy:header")}</h1>
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

export default HeaderPrivacyPolicy;
