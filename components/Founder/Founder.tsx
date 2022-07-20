/* eslint-disable @next/next/no-img-element */
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Container from "./../Container/Container";

const sacha = "/images/teams/Sacha.png";
const sachaHover = "/images/teams/Sacha-Hover.png";
const linkedin = "/images/social/linkedin-gray.svg";

const Founder = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <article className="founder">
      <Container>
        <h2 className="founder__title">{t("teams:founder.title")}</h2>
        <div className="founder__container">
          <a
            href="https://www.linkedin.com/in/sacha-rozencwajg-281466104/"
            className="founder__imageLink"
            title={t("teams:linkTitle", { name: "Dr. Sacha Rozencwajg" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="founder__imageContainer">
              <img
                src={sacha}
                alt={t("teams:alt", { name: "Dr. Sacha Rozencwajg" })}
                className="founder__image"
              />
              <img
                src={sachaHover}
                alt={t("teams:founder.alt")}
                className="founder__imageHover"
              />
            </div>
          </a>
          <div className="founder__presentation">
            <div className="founder__identityContainer">
              <h3 className="founder__identity">Dr. Sacha Rozencwajg</h3>
              <a
                href="https://www.linkedin.com/in/sacha-rozencwajg-281466104/"
                className="founder__linkedinLink"
                title={t("teams:linkTitle", { name: "Dr. Sacha Rozencwajg" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="logo linkedin"
                  className="founder__linkedinImage"
                />
              </a>
            </div>
            <p className="founder__status">{t("teams:founder.status")}</p>
            <blockquote className="founder__citation">
              {t("teams:founder.p1")}
              <br /> <br />
              {t("teams:founder.p2")}
              {t("teams:founder.p3")}
              <br />
              <br />
              {t("teams:founder.p4")}
              <br />
              <br />
              {t("teams:founder.p5")}
              <br />
              {t("teams:founder.p6")}
            </blockquote>
          </div>
        </div>
      </Container>
    </article>
  );
};

export default Founder;
