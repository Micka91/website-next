/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo/teamdoc.png";
import { PATHS } from "../../enums/paths";

const ROUTES = [
  { path: "Solution", key: PATHS.SOLUTION },
  { path: "Notre équipe", key: PATHS.TEAM },
  { path: "Offres", key: PATHS.OFFERS },
  { path: "Presse", key: PATHS.PRESS },
  { path: "Contact", key: PATHS.CONTACT },
  { path: "Nous rejoindre", key: PATHS.JOIN_US },
];

const Navigation = () => {
  // NEXT HOOK
  const router = useRouter();
  // STATE
  const [visible, setVisible] = useState<boolean>(false);
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const navstyle = visible ? ["navigation", "sticky"].join(" ") : "navigation";

  const handleScroll = (): void => {
    const currentScrollPos: number = window.pageYOffset;
    if (currentScrollPos > 70) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setPrevScrollpos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={navstyle}>
      <Link href={PATHS.INDEX}>
        <a>
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

          <li className="navigation__item">
            {/* SWITCHLANG */}
            EN
          </li>
        </ul>
      </nav>
      {/* Buttons */}
      <div className="navigation__buttons">
        <button>RESERVER UNE DEMO</button>
        <button>TEAMDOC_WEB</button>
      </div>
    </header>
  );
};

export default Navigation;
