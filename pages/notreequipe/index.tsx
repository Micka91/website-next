// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "./../../utils/namespaces";
import { useTranslation } from "next-i18next";
// COMPONENTS
import HeaderTeams from "../../components/Headers/HeaderTeams/HeaderTeams";
import Founder from "./../../components/Founder/Founder";
import Teams from "./../../components/Teams/Teams";
import Committee from "./../../components/Committee/Committee";
import BlueCard from "./../../components/BlueCard/BlueCard";
import Partners from "./../../components/Partners/Partners";
import SEO from "./../../components/SEO/SEO";

const Team = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t("seo:cgu.title")} description={t("seo:cgu.description")} />
      <HeaderTeams />
      <Founder />
      <Teams />
      <Committee />
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

export default Team;
