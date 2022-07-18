// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "../../utils/namespaces";
// COMPONENTS
import SEO from "../../components/SEO/SEO";
import BlueCard from "../../components/BlueCard/BlueCard";
import Partners from "../../components/Partners/Partners";
import HeaderCookies from "../../components/Headers/HeaderCookies/HeaderCookies";
import CookiesContent from "../../components/CookiesContent/CookiesContent";

const CookiePolicy = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo:cookies.title")}
        description={t("seo:cookies.description")}
        type="article"
      />
      <HeaderCookies />
      <CookiesContent />
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

export default CookiePolicy;
