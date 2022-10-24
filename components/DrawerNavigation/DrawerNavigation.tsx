// REACT
import { useState, useContext } from "react";
// NEXT
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { common } from "../../translations/fr/common";
import { navigation } from "../../translations/fr/navigation";
// ENUMS
import { PATHS } from "../../enums/paths";
// UTILS
import { ROUTES } from "../../utils/routes";
// CONTEXT
import { MenuContext } from "../../context/MenuContext";
// COMPONENTS
import DownloadApp from "./../DownloadApp/DownloadApp";
import Address from "./../Address/Address";
import SocialMedia from "./../SocialMedia/SocialMedia";
import Button from "./../Button/Button";

const DrawerNavigation = () => {
  // NEXT HOOK
  const router = useRouter();
  // REACT HOOKS
  const { menuOpen, handleOpenMenu } = useContext(MenuContext);
  // I18NEXT HOOKS
  // const { t } = useTranslation();
  // STATE
  const [currentLocale, setCurrentLocale] = useState(router.locale);

  const drawerBackdropClasses = menuOpen
    ? ["drawer__backdrop", "drawer__backdropOpen"]
    : ["drawer__backdrop", "drawer__backdropClose"];

  const drawerContainerClasses = menuOpen
    ? ["drawer__container", "drawer__drawerOpen"]
    : ["drawer__container", "drawer__drawerClose"];

  // const ROUTES = [
  //   { path: t("navigation:solution"), key: PATHS.SOLUTION },
  //   { path: t("navigation:team"), key: PATHS.TEAM },
  //   { path: t("navigation:offers"), key: PATHS.OFFERS },
  //   { path: t("navigation:press"), key: PATHS.PRESS },
  //   { path: t("navigation:contact"), key: PATHS.CONTACT },
  //   { path: t("navigation:joinUs"), key: PATHS.JOIN_US },
  // ];

  const handleOpenBook = () => {
    window.open("https://calendly.com/tamsaguine/teamdoc");
  };

  const handleLocaleChange = () => {
    const lang = currentLocale === "fr" ? "en" : "fr";
    router.push(router.route, router.asPath, {
      locale: lang,
    });
    setCurrentLocale(lang);
  };

  const handleCloseDrawer = () => {
    if (handleOpenMenu) handleOpenMenu();
  };

  return (
    <div className="drawer">
      <div className={drawerBackdropClasses.join(" ")}></div>
      <div className={drawerContainerClasses.join(" ")}>
        <div className="drawer__close" onClick={handleOpenMenu}>
          <Image src="/images/icones/close.svg" alt="" width="36" height="36" />
        </div>
        <div className="drawer__content">
          <nav className="navigationresponsiv__navbar">
            <ul className="navigationresponsiv__items">
              {ROUTES.map((route) => (
                <li className="navigationresponsiv__item" key={route.key}>
                  <Link href={route.key}>
                    <a
                      className={router.asPath === route.key ? "active" : ""}
                      onClick={handleCloseDrawer}
                    >
                      {route.path}
                    </a>
                  </Link>
                </li>
              ))}
              <li className="navigation__item">
                <a
                  href="https://blog.teamdoc.fr/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BLOG
                </a>
              </li>
              {/* SWITCHLANG */}
              {/* <li
                className="navigationresponsiv__item navigationresponsiv__item--lang"
                onClick={handleLocaleChange}
              >
                {currentLocale === "fr" ? "en" : "fr"}
              </li> */}
            </ul>
          </nav>
          {/* Buttons */}
          <div className="navigationresponsiv__buttons">
            <Button
              className="button__demo button__demo--navigation"
              onClick={handleOpenBook}
            >
              {navigation.book}
              {/* {t("navigation:book")} */}
            </Button>
          </div>
          <DownloadApp />
          <div>
            <h4 className="footer__title">Contact</h4>
            <Address />
          </div>
          <div>
            <h4 className="footer__title">{common.follow}</h4>
            {/* <h4 className="footer__title">{t("common:follow")}</h4> */}
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerNavigation;
