// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { namespaces } from "./../../utils/namespaces";
// COMPONENTS
import HeaderOffers from "./../../components/Headers/HeaderOffers/HeaderOffers";
import SEO from "./../../components/SEO/SEO";
import OffersCards from "../../components/OffersCards/OffersCards";
import FaQ from "./../../components/FaQ/FaQ";

const Offers = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo:offers.title")}
        description={t("seo:offers.description")}
        type="product"
      />
      <HeaderOffers />
      <OffersCards />
      <FaQ />
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

export default Offers;
