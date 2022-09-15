/* eslint-disable @next/next/no-img-element */
// REACT
import { useState, useEffect, useContext } from "react";
// CONTEXT
import { DrawerContext } from "./../../context/DrawerContext";
import { MenuContext } from "./../../context/MenuContext";
// NEXT
import { useRouter } from "next/router";
import Link from "next/link";
// UTILS
import { PATHS } from "../../enums/paths";
// COMPONENTS
import Button from "./../Button/Button";
// TRANSLATION
import { useTranslation } from "next-i18next";

const Navigation = () => {
  // NEXT HOOK
  const router = useRouter();
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);
  const { handleOpenMenu } = useContext(MenuContext);
  // i18NEXT HOOK
  const { t } = useTranslation();
  // STATE
  const [visible, setVisible] = useState<boolean>(false);
  const [currentLocale, setCurrentLocale] = useState(router.locale);
  const navstyle = visible ? ["navigation", "sticky"].join(" ") : "navigation";

  const handleScroll = (): void => {
    const currentScrollPos: number = window.pageYOffset;
    if (currentScrollPos > 70) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleLocaleChange = () => {
    const lang = currentLocale === "fr" ? "en" : "fr";
    router.push(router.route, router.asPath, {
      locale: lang,
    });
    setCurrentLocale(lang);
  };

  // const handleOpenBook = () => {
  //   window.open("https://calendly.com/tamsaguine/teamdoc");
  // };

  const handleOpenWebapp = () => {
    window.open("https://webapp.teamdoc.fr/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ROUTES = [
    { path: t("navigation:solution"), key: PATHS.SOLUTION },
    { path: t("navigation:team"), key: PATHS.TEAM },
    { path: t("navigation:offers"), key: PATHS.OFFERS },
    { path: t("navigation:press"), key: PATHS.PRESS },
    { path: t("navigation:contact"), key: PATHS.CONTACT },
    { path: t("navigation:joinUs"), key: PATHS.JOIN_US },
  ];

  return (
    <header className={navstyle}>
      <Link href={PATHS.INDEX}>
        <a className="navigation__link">
          <img
            src="/images/logo/teamdoc.png"
            alt="Logo de teamdoc"
            width={170}
            height={70}
            className="navigation__logo"
          />
        </a>
      </Link>

      <nav className="navigation__navbar">
        <ul className="navigation__items">
          {ROUTES.map((route) => (
            <li className="navigation__item" key={route.key}>
              <Link href={route.key}>
                <a className={router.asPath === route.key ? "active" : ""}>
                  {route.path}
                </a>
              </Link>
            </li>
          ))}

          {/* SWITCHLANG */}
          <li
            className="navigation__item navigation__item--lang"
            onClick={handleLocaleChange}
          >
            {currentLocale === "fr" ? "en" : "fr"}
          </li>
          {/* DRAWER */}
          <li className="navigation__drawer" onClick={handleOpen}>
            <img
              src="/images/icones/drawer.svg"
              alt=""
              width={24}
              height={24}
            />
          </li>
        </ul>
      </nav>
      {/* BURGER */}
      <div className="navigation__burger" onClick={handleOpenMenu}>
        <img src="/images/icones/burger.svg" alt="" />
      </div>
      {/* Buttons */}
      <div className="navigation__buttons">
        {/* <Button className="button__demo" onClick={handleOpenBook}>
          {t("navigation:book")}
        </Button> */}
        <Button
          className="button__gradient"
          onClick={handleOpenWebapp}
        >{`TEAM'DOC WEB`}</Button>
      </div>
    </header>
  );
};

export default Navigation;
