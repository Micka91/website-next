/* eslint-disable @next/next/no-img-element */

// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "./../Background/Background";
import Hero from "./../Hero/Hero";
import Button from "./../Button/Button";

const HomeHero = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <section className="home__hero">
      <Background
        src="/images/headers/header-home.png"
        alt={t("home:hero.alt1")}
        className="header__home"
      >
        <Hero>
          <div className="home__banner">
            <div className="home__container">
              <h1 className="home__title">{t("home:hero.h1")}</h1>
              <p className="home__paragraph">{t("home:hero.p")}</p>
              <div className="home__buttons">
                <Button className="button__gradient">
                  {t("common:download")}
                  <img
                    src="/images/icones/whiteArrow.svg"
                    alt={t("home:hero.alt2")}
                  />
                </Button>
                <Button className="button__more">
                  {t("home:hero.button")}
                </Button>
              </div>
            </div>
            <img
              src="/images/hero/hero-home.png"
              alt={t("home:hero.alt3")}
              className="home__image"
            />
          </div>
        </Hero>
      </Background>
    </section>
  );
};

export default HomeHero;
