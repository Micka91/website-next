/* eslint-disable @next/next/no-img-element */
// REACT
import { useContext } from "react";
// NEXT
import Link from "next/link";
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Container from "../Container/Container";
import Button from "./../Button/Button";
// CONTEXT
import { DrawerContext } from "../../context/DrawerContext";

const BlueCard = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);

  return (
    <Container>
      <div className="blueCard">
        <div className="blueCard__container">
          <img
            src="/images/logo/teamdoc-logo.svg"
            alt={t("common:logo")}
            className="blueCard__logo"
          />
          <div className="blueCard__content">
            <h2>{t("common:blueCard.h2")}</h2>
            <p>{t("common:blueCard.p")}</p>
          </div>
        </div>
        <div className="blueCard__buttons">
          <Button className="button__white" onClick={handleOpen}>
            {t("common:download")}
            <img
              src="/images/icones/arrow.svg"
              alt={t("common:blueCard.alt")}
            />
          </Button>
          <Button className="button__price">
            <Link href={t("navigation:paths.offers")}>
              {t("common:seePrice")}
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BlueCard;
