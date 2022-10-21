// TRANSLATION
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { namespaces } from "../../utils/namespaces";
// import { useTranslation } from "next-i18next";
import { seo } from "../../translations/fr/seo";
// COMPONENTS
import SEO from "./../../components/SEO/SEO";
import HeaderJoinUS from "../../components/Headers/HeaderJoinUS/HeaderJoinUS";
import JoinUsCard from "./../../components/JoinUsCard/JoinUsCard";
import BlueCard from "./../../components/BlueCard/BlueCard";
import Partners from "./../../components/Partners/Partners";

const JoinUs = () => {
  // // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <>
      <SEO
        title={seo.joinUs.title}
        description={seo.joinUs.description}
        // title={t("seo:joinUs.title")}
        // description={t("seo:joinUs.description")}
        type="website"
      />
      <HeaderJoinUS />
      <JoinUsCard />
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

export default JoinUs;
