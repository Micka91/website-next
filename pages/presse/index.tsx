// TRANSLATION
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { namespaces } from "./../../utils/namespaces";
// import { useTranslation } from "next-i18next";
import { seo } from "../../translations/fr/seo";
// COMPONENTS
import SEO from "./../../components/SEO/SEO";
import HeaderPress from "../../components/Headers/HeaderPress/HeaderPress";
import PressCards from "./../../components/PressCards/PressCards";
import PressRelease from "./../../components/PressRelease/PressRelease";
import PressArticles from "./../../components/PressArticles/PressArticles";
import PressVideos from "./../../components/PressVideos/PressVideos";
import BlueCard from "./../../components/BlueCard/BlueCard";
import Partners from "./../../components/Partners/Partners";

const Press = () => {
  // // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <>
      <SEO
        title={seo.press.title}
        description={seo.press.description}
        // title={t("seo:press.title")}
        // description={t("seo:press.description")}
        type="article"
      />
      <HeaderPress />
      <PressCards />
      <PressRelease />
      <div className="press__background">
        <div
          className="press__pattern"
          style={{ backgroundImage: "url(/images/background/pattern.svg)" }}
        ></div>
        <PressArticles />
        <PressVideos />
      </div>
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

export default Press;
