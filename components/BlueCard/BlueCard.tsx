/* eslint-disable @next/next/no-img-element */
// REACT
import { useState, useEffect, useContext } from "react";
// NEXT
import Link from "next/link";
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Container from "../Container/Container";
import Button from "./../Button/Button";
// CONTEXT
import { DrawerContext } from "../../context/DrawerContext";
import { PATHS } from "../../enums/paths";
import Image from "next/image";
import useWindowMatches from "../../hooks/useWindowMatches";

const BlueCard = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);
  // CUSTOM HOOKS
  const { isNotMobile } = useWindowMatches();
  // REACT STATE
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(max-width: 520px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <Container>
      <div className="blueCard">
        <div className="blueCard__container">
          {isNotMobile && (
            <Image
              src="/images/logo/teamdoc-logo.svg"
              alt={t("common:logo")}
              width={matches ? "80" : "130"}
              height="130"
              className="blueCard__logo"
            />
          )}
          <div className="blueCard__content">
            <h2>{t("common:blueCard.h2")}</h2>
            <p>{t("common:blueCard.p")}</p>
          </div>
        </div>
        <div className="blueCard__buttons">
          <Button className="button__white" onClick={handleOpen}>
            {t("common:download")}
            <Image
              src="/images/icones/arrow.svg"
              alt={t("common:blueCard.alt")}
              width="20"
              height="20"
            />
          </Button>
          <Button className="button__price">
            <Link href={PATHS.OFFERS}>
              <a>{t("common:seePrice")}</a>
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BlueCard;
