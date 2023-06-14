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
import Container from "../Container/Container";
import HomeReferences from "../HomeReferences/HomeReferences";

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const HomeHero = () => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);

  const handleOpenBook = () => {
    window.open("https://calendly.com/tamsaguine/teamdoc");
  };

  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <section className="home__hero">
      <Background
        src="/images/headers/header-home.png"
        alt={home.hero.alt1}
        // alt={t("home:hero.alt1")}
        className="header__home"
      >
        <div className="home__heroContainer">
          <Hero>
            <div className="home__banner">
              <div className="home__container">
                <h1 className="home__title">{home.hero.h1}</h1>
                <p className="home__paragraph">{home.hero.p1}</p>
                <p className="home__paragraph">{home.hero.p2}</p>
                {/* <h1 className="home__title">{t("home:hero.h1")}</h1>
              <p className="home__paragraph">{t("home:hero.p")}</p> */}
                <Button className="button__demo" onClick={handleOpenBook}>
                  {navigation.book}
                  {/* {t("navigation:book")} */}
                </Button>
              </div>
              <Image
                src="/images/hero/hero-home-CP.png"
                alt={home.hero.alt3}
                // alt={t("home:hero.alt3")}
                priority={true}
                width="800"
                height="1000"
                className="home__image"
              />
            </div>
          </Hero>
        </div>
        <HomeReferences />
      </Background>
    </section>
  );
};

export default HomeHero;
