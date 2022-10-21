// TRANSLATION
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
// import { namespaces } from "./../../utils/namespaces";
import { seo } from "../../translations/fr/seo";
// COMPONENTS
import SEO from "./../../components/SEO/SEO";
import BlueCard from "./../../components/BlueCard/BlueCard";
import Partners from "./../../components/Partners/Partners";
import HeaderContact from "../../components/Headers/HeaderContact/HeaderContact";
import ContactContent from "../../components/ContactContent/ContactContent";

const Contact = () => {
  // // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <>
      <SEO
        title={seo.contact.title}
        description={seo.contact.description}
        // title={t("seo:contact.title")}
        // description={t("seo:contact.description")}
        type="website"
      />
      <HeaderContact />
      <ContactContent />
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

export default Contact;
