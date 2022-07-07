// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "../../utils/namespaces";

// COMPONENTS
import HeaderCgv from "../../components/Headers/HeaderCgv/HeaderCgv";
import SEO from "../../components/SEO/SEO";
import BlueCard from "../../components/BlueCard/BlueCard";
import Partners from "../../components/Partners/Partners";
import CgvContent from "../../components/CgvContent/CgvContent";

const Cgv = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("seo:cgu.title")} description={t("seo:cgu.description")} />
      <HeaderCgv />
      <CgvContent />
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

export default Cgv;
