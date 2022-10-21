// TRANSLATION
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { namespaces } from "../../utils/namespaces";
import { seo } from "../../translations/fr/seo";
// COMPONENTS
import SEO from "../../components/SEO/SEO";
import BlueCard from "../../components/BlueCard/BlueCard";
import Partners from "../../components/Partners/Partners";
import HeaderLegalsMentions from "../../components/Headers/HeaderLegalsMentions/HeaderLegalsMentions";
import LegalsMentionsContent from "../../components/LegalsMentionsContent/LegalsMentionsContent";

const LegalsMentions = () => {
  // // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <>
      <SEO
        title={seo.cgu.title}
        description={seo.cgu.description}
        // title={t("seo:cgu.title")}
        // description={t("seo:cgu.description")}
        type="article"
      />
      <HeaderLegalsMentions />
      <LegalsMentionsContent />
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

export default LegalsMentions;
