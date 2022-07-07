// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { namespaces } from "./../../utils/namespaces";
// COMPONENTS
import SEO from "./../../components/SEO/SEO";
import BlueCard from "./../../components/BlueCard/BlueCard";
import Partners from "./../../components/Partners/Partners";
import HeaderContact from "../../components/Headers/HeaderContact/HeaderContact";
import ContactContent from "../../components/ContactContent/ContactContent";

const Contact = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("seo:cgu.title")} description={t("seo:cgu.description")} />
      <HeaderContact />
      <ContactContent />
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

export default Contact;
