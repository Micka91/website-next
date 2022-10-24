// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { press } from "../../translations/fr/press";
import { common } from "../../translations/fr/common";
// COMPONENTS
import Container from "./../Container/Container";

const visuelApp = "/images/press/visuel-app.png";
const visuelZip = "/images/press/visuels.zip";
const logo = "/images/press/logo-std.svg";
const contacts = "/images/press/contacts.png";

const PressCards = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <Container>
      <div className="pressCards">
        <div className="pressCards__card pressCards__card--fld">
          <h2 className="pressCards__cardTitle">
            {press.pressCards.title}
            {/* {t("press:pressCards.title")} */}
          </h2>
          <div className="pressCards__folder">
            <Image src={contacts} alt="" width="130" height="130" />
            <div>
              <p>
                {press.pressCards.p1} <br />
                {press.pressCards.p2} <br />
                {press.pressCards.p3} <br />
                {press.pressCards.p4}
                {/* {t("press:pressCards.p1")} <br />
                {t("press:pressCards.p2")} <br />
                {t("press:pressCards.p3")} <br />
                {t("press:pressCards.p4")} */}
              </p>
            </div>
          </div>
          <a
            href="/images/press/DP_2020.pdf"
            download
            className="button button__gradient pressCards__button"
          >
            {common.download}
            {/* {t("common:download")} */}
            <Image
              src="/images/icones/whiteArrow.svg"
              alt=""
              width="24"
              height="24"
            />
          </a>
        </div>
        <div className="pressCards__card">
          <h2 className="pressCards__cardTitle">
            {press.pressCards.kitTitle}
            {/* {t("press:pressCards.kitTitle")} */}
          </h2>
          <div className="pressCards__downloadContainer">
            <div className="pressCards__download">
              <Image src={logo} alt="" width="208" height="100" />
              <p>{press.pressCards.logotype}</p>
              {/* <p>{t("press:pressCards.logotype")}</p> */}
              <a href={logo} download className="pressCards__link">
                {common.download}
                {/* {t("common:download")} */}
              </a>
            </div>
            <div className="pressCards__download">
              <Image src={visuelApp} alt="" width="208" height="100" />
              <p>{press.pressCards.visuels}</p>
              {/* <p>{t("press:pressCards.visuels")}</p> */}
              <a href={visuelZip} download className="pressCards__link">
                {common.download}
                {/* {t("common:download")} */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PressCards;
