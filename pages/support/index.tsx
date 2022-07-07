// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "../../utils/namespaces";
import { useTranslation } from "next-i18next";
// COMPONENTS
import BlueCardSupport from "../../components/BlueCardSupport/BlueCardSupport";
import SupportContent from "../../components/SupportContent/SupportContent";
import SEO from "./../../components/SEO/SEO";
import HeaderSupport from "../../components/Headers/HeaderSupport/HeaderSupport";

const Support = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t("seo:cgu.title")} description={t("seo:cgu.description")} />
      <HeaderSupport />
      <SupportContent />
      <BlueCardSupport />
    </>
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

export default Support;
