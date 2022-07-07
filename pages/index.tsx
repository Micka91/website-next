// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { namespaces } from "../utils/namespaces";
// COMPONENTS
import Partners from "../components/Partners/Partners";
import Simplification from "../components/Simplification/Simplification";
import Functionnality from "./../components/Functionnality/Functionnality";
import Recommandations from "./../components/Recommandations/Recommandations";
import BlueCard from "./../components/BlueCard/BlueCard";
import HomeHero from "./../components/HomeHero/HomeHero";
import SEO from "../components/SEO/SEO";

const Home = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo:home.title")}
        description={t("seo:home.description")}
      />
      <HomeHero />
      <Simplification />
      <Functionnality />
      <Recommandations />
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

export default Home;
