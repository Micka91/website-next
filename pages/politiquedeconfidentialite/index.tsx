// TRANSLATION
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { namespaces } from "../../utils/namespaces";
import { seo } from "../../translations/fr/seo";
// COMPONENTS
import SEO from "../../components/SEO/SEO";
import BlueCard from "../../components/BlueCard/BlueCard";
import Partners from "../../components/Partners/Partners";
import PrivacyPolicyContent from "../../components/PrivacyPolicyContent/PrivacyPolicyContent";
import HeaderPrivacyPolicy from "../../components/Headers/HeaderPrivacyPolicy/HeaderPrivacyPolicy";

const PrivacyPolicy = () => {
  // // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <>
      <SEO
        title={seo.privacy.title}
        description={seo.privacy.description}
        // title={t("seo:privacy.title")}
        // description={t("seo:privacy.description")}
        type="article"
      />
      <HeaderPrivacyPolicy />
      <PrivacyPolicyContent />
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

export default PrivacyPolicy;
