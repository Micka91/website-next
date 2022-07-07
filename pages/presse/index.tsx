// TRANSLATION
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Press = () => {
  return (
    <div>
      <div style={{ width: "100%", height: 5000 }}></div>Press
    </div>
  );
};

interface Iprops {
  locale: string;
}

export const getStaticProps = async ({ locale }: Iprops) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "home",
        "common",
        "seo",
        "navigation",
        "partners",
        "footer",
      ])),
    },
  };
};

export default Press;
