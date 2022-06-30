// TRANSLATION
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, withTranslation } from "next-i18next";
// COMPONENTS
import Background from "./../Background/Background";
import Hero from "./../Hero/Hero";
import Button from "./../Button/Button";

interface IProps {
  locale: string;
}

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <section className="home__hero">
      <Background
        src="/images/headers/header-home.png"
        alt="Image de fond accueil de teamdoc"
        className="header__home"
      >
        <Hero>
          {/* <Container> */}
          <div className="home__banner">
            <div className="home__container">
              <h1 className="home__title">{t("welcome")}</h1>
              <p className="home__paragraph">
                {`Créée par des soignants, Team'Doc facilite le travail en équipe
                pour tous les professionnels de santé, à l'hôpital, en clinique
                ou en cabinet.`}
              </p>
              <div className="home__buttons">
                <Button className="button__gradient">
                  Telecharger
                  <img src="/images/icones/whiteArrow.svg" alt="" />
                </Button>
                <Button className="button__more">En savoir plus</Button>
              </div>
            </div>
            <img
              src="/images/hero/hero-home.png"
              alt="Deux téléphone, décrivant l'application teamdoc"
              className="home__image"
            />
          </div>
          {/* </Container> */}
        </Hero>
      </Background>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["home"])),
    },
  };
};

export default withTranslation("homeHero")(HomeHero);
