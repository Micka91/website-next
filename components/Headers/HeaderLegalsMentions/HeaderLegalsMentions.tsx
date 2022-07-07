// TRANSLATION
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// COMPONENTS
import Background from "../../Background/Background";
import { namespaces } from "./../../../utils/namespaces";

const HeaderLegalsMentions = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="legalsMentions__header">
      <Background
        src="/images/headers/common.svg"
        alt="Image de fond cgv teamdoc"
        className="header__legalsMentions"
      >
        <h1 className="legalsMentions__title">{t("legalsmentions:header")}</h1>
      </Background>
    </section>
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

export default HeaderLegalsMentions;
