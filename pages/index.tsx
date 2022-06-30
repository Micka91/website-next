// TRANSLATION
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
// COMPONENTS
import Partners from "../components/Partners/Partners";
import Simplification from "../components/Simplification/Simplification";
import Functionnality from "./../components/Functionnality/Functionnality";
import Recommandations from "./../components/Recommandations/Recommandations";
import BlueCard from "./../components/BlueCard/BlueCard";
import HomeHero from "./../components/HomeHero/HomeHero";
import SEO from "../components/SEO/SEO";

interface IProps {
  locale: string;
}

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="La communication et l’organisation entre soignants dans une application sécurisée : Team’Doc"
        description="Team'Doc est une application sécurisée qui facilite la communication et l'organisation entre soignants. Découvrez l’outil ici et téléchargez-le gratuitement."
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["home"])),
    },
  };
};

export default Home;
