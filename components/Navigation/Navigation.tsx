// REACT
import { useState, useEffect, useContext } from "react";
// NEXT
import Image from "next/image";
// CONTEXT
import { DrawerContext } from "./../../context/DrawerContext";
import { MenuContext } from "./../../context/MenuContext";
// NEXT
import { useRouter } from "next/router";
import Link from "next/link";
// ENUMS
import { PATHS } from "../../enums/paths";
// UTILS
import { ROUTES } from "../../utils/routes";
// COMPONENTS
import Button from "./../Button/Button";
// TRANSLATION
import { navigation } from "../../translations/fr/navigation";
// import { useTranslation } from "next-i18next";

const Navigation = () => {
  // NEXT HOOK
  const router = useRouter();
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);
  const { handleOpenMenu } = useContext(MenuContext);
  // i18NEXT HOOK
  // const { t } = useTranslation();
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

  const handleOpenBook = () => {
    window.open("https://calendly.com/tamsaguine/teamdoc");
  };

  const handleOpenWebapp = () => {
    window.open("https://webapp.teamdoc.fr/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const ROUTES = [
  //   { path: t("navigation:solution"), key: PATHS.SOLUTION },
  //   { path: t("navigation:team"), key: PATHS.TEAM },
  //   { path: t("navigation:offers"), key: PATHS.OFFERS },
  //   { path: t("navigation:press"), key: PATHS.PRESS },
  //   { path: t("navigation:contact"), key: PATHS.CONTACT },
  //   { path: t("navigation:joinUs"), key: PATHS.JOIN_US },
  // ];

  return (
    <header className={navstyle}>
      <Link href={PATHS.INDEX}>
        <a className="navigation__link">
          <Image
            src="/images/logo/teamdoc.png"
            alt="Logo de teamdoc"
            className="navigation__logo"
            width={170}
            height={70}
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
          <li className="navigation__item">
            <a
              href="https://teamdoc.fr/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BLOG
            </a>
          </li>
          {/* SWITCHLANG */}
          <li className="navigation__item">
            <a
              href="https://teamdoc.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              EN
            </a>
          </li>
          {/* <li
            className="navigation__item navigation__item--lang"
            onClick={handleLocaleChange}
          >
            {currentLocale === "fr" ? "en" : "fr"}
          </li> */}
          {/* DRAWER */}
          {/* <li className="navigation__drawer" onClick={handleOpen}>
            <Image
              src="/images/icones/drawer.svg"
              alt=""
              width={24}
              height={24}
            />
          </li> */}
        </ul>
      </nav>
      {/* BURGER */}
      <div className="navigation__burger" onClick={handleOpenMenu}>
        <Image src="/images/icones/burger.svg" alt="" width={36} height={36} />
      </div>
      {/* Buttons */}
      <div className="navigation__buttons">
        <Button
          className="button__demo button__demo--navigation"
          onClick={handleOpenBook}
        >
          {navigation.book}
        </Button>
        <Button
          className="button__webapp"
          onClick={handleOpenWebapp}
        >{`TEAM'DOC WEB`}</Button>
      </div>
    </header>
  );
};

export default Navigation;
