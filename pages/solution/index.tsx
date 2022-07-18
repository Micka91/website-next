// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "../../utils/namespaces";
import { useTranslation } from "next-i18next";
// COMPONENTS
import BlueCard from "../../components/BlueCard/BlueCard";
import HeaderSolutions from "../../components/Headers/HeaderSolutions/HeaderSolutions";
import Partners from "./../../components/Partners/Partners";
import Explanations from "../../components/Explanations/Explanations";
import SEO from "./../../components/SEO/SEO";
import OthersTools from "../../components/OthersTools/OthersTools";

const Solution = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo:solution.title")}
        description={t("seo:solution.description")}
        type="website"
      />
      <HeaderSolutions />
      <Explanations />
      <OthersTools />
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

export default Solution;
