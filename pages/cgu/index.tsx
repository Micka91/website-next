// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "../../utils/namespaces";

// COMPONENTS
import HeaderCgu from "./../../components/Headers/HeaderCgu/HeaderCgu";
import SEO from "./../../components/SEO/SEO";
import BlueCard from "../../components/BlueCard/BlueCard";
import Partners from "../../components/Partners/Partners";
import CguContent from "../../components/CguContent/CguContent";

const Cgu = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("seo:cgu.title")} description={t("seo:cgu.description")} />
      <HeaderCgu />
      <CguContent />
      <BlueCard />
      <Partners />
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

export default Cgu;
