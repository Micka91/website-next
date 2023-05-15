// REACT
import { useEffect } from "react";
// NEXT
import { useRouter } from "next/router";
// TRANSLATION
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
// import { namespaces } from "../utils/namespaces";
// ENUMS
import { PATHS } from "../enums/paths";
import { seo } from "../translations/fr/seo";
// COMPONENTS
import Partners from "../components/Partners/Partners";
import Simplification from "../components/Simplification/Simplification";
import Functionnality from "./../components/Functionnality/Functionnality";
import Recommandations from "./../components/Recommandations/Recommandations";
import BlueCard from "./../components/BlueCard/BlueCard";
import HomeHero from "./../components/HomeHero/HomeHero";
import SEO from "../components/SEO/SEO";
import HomeReferences from "../components/HomeReferences/HomeReferences";

const Home = () => {
  // // i18NEXT HOOK
  // const { t } = useTranslation();
  // NEXT HOOKS
  const routers = useRouter();

  useEffect(() => {
    if (routers.asPath !== PATHS.INDEX) {
      routers.push(routers.asPath);
      console.log("ROUTER", routers.asPath);
    }
  }, [routers]);

  return (
    <>
      <SEO
        title={seo.home.title}
        description={seo.home.description}
        // title={t("seo:home.title")}
        // description={t("seo:home.description")}
        type="website"
      />
      <HomeHero />
      {/* <HomeReferences /> */}
      <Simplification />
      <Functionnality />
      <Recommandations />
      <BlueCard />
      <Partners />
    </>
  );
};

// interface Iprops {
//   locale: string;
// }

// export const getStaticProps = async ({ locale }: Iprops) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, namespaces)),
//     },
//   };
// };

export default Home;
