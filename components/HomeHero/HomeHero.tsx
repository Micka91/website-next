/* eslint-disable @next/next/no-img-element */
// REACT
import { useContext } from "react";
// NEXT
import Image from "next/image";
import Link from "next/link";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { home } from "../../translations/fr/home";
import { navigation } from "../../translations/fr/navigation";
// COMPONENTS
import Background from "./../Background/Background";
import Hero from "./../Hero/Hero";
import Button from "./../Button/Button";
// CONTEXT
import { DrawerContext } from "./../../context/DrawerContext";
// ENUMS
import { PATHS } from "../../enums/paths";

const HomeHero = () => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);

  const handleOpenBook = () => {
    window.open("https://calendly.com/tamsaguine/teamdoc");
  };

  return (
    <section className="home__hero">
      <Background
        src="/images/headers/header-home.png"
        alt={home.hero.alt1}
        // alt={t("home:hero.alt1")}
        className="header__home"
      >
        <Hero>
          <div className="home__banner">
            <div className="home__container">
              <h1 className="home__title">{home.hero.h1}</h1>
              <p className="home__paragraph">{home.hero.p}</p>
              {/* <h1 className="home__title">{t("home:hero.h1")}</h1>
              <p className="home__paragraph">{t("home:hero.p")}</p> */}
              {/* <div className="home__buttons">
                <Button className="button__gradient" onClick={handleOpen}>
                  {t("common:download")}
                  <img
                    src="/images/icones/whiteArrow.svg"
                    alt={t("home:hero.alt2")}
                  />
                </Button>
                <Link href={PATHS.OFFERS}>
                  <a className="home__link">{t("home:hero.button")}</a>
                </Link>
              </div> */}
              <Button className="button__demo" onClick={handleOpenBook}>
                {navigation.book}
                {/* {t("navigation:book")} */}
              </Button>
            </div>

            {/* <img
              src="/images/hero/hero-home.png"
              alt={t("home:hero.alt3")}
              className="home__image"
            /> */}
            <Image
              src="/images/hero/hero-home.png"
              alt={home.hero.alt3}
              // alt={t("home:hero.alt3")}
              priority={true}
              width="600"
              height="800"
              className="home__image"
            />
          </div>
        </Hero>
      </Background>
    </section>
  );
};

export default HomeHero;
