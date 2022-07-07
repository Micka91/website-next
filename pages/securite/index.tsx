// REACT
import { useMemo } from "react";
// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { namespaces } from "./../../utils/namespaces";
import { useTranslation } from "next-i18next";
// COMPONENTS
import SEO from "./../../components/SEO/SEO";
import BlueCard from "./../../components/BlueCard/BlueCard";
import Partners from "./../../components/Partners/Partners";
import HeaderSecurity from "../../components/Headers/HeaderSecurity/HeaderSecurity";
import SecurityCard from "./../../components/SecurityCard/SecurityCard";
import Container from "./../../components/Container/Container";

const Security = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  const securities = useMemo(
    () => [
      {
        title: t("security:card1.title"),
        alt: "",
        image: "/images/security/device.svg",
        strongText: t("security:card1.strongText"),
        text: t("security:card1.text"),
      },
      {
        title: t("security:card2.title"),
        alt: "",
        image: "/images/security/communication.svg",
        strongText: t("security:card2.strongText"),
        text: t("security:card2.text"),
      },
      {
        title: t("security:card3.title"),
        alt: "",
        image: "/images/security/server.svg",
        strongText: t("security:card3.strongText"),
        text: t("security:card3.text"),
        validation1: t("security:card3.validationType.valid1"),
        validation2: t("security:card3.validationType.valid2"),
      },
    ],
    [t]
  );

  return (
    <>
      <SEO title={t("seo:cgu.title")} description={t("seo:cgu.description")} />
      <HeaderSecurity />
      <Container>
        <section className="security">
          {securities.map((data, index) => (
            <SecurityCard key={index} data={data} />
          ))}
        </section>
      </Container>
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

export default Security;
