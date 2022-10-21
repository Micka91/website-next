// TRANSLATION
// import { useTranslation } from "next-i18next";
import { offers } from "../../translations/fr/offers";
// UTILS
import { wkType } from "./../OffersCards/OffersCards";
// COMPONENTS
import Container from "./../Container/Container";

interface IProps {
  type: string;
  setType: (data: string) => void;
}

const OffersHeader = ({ type, setType }: IProps) => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  const B2BButtonClasses =
    type === wkType.B2B
      ? ["offersHeader__button", "offersHeader__B2BSelected"]
      : ["offersHeader__button", "offersHeader__unselected"];

  const B2CButtonClasses =
    type === wkType.PRO
      ? ["offersHeader__button", "offersHeader__B2CSelected"]
      : ["offersHeader__button", "offersHeader__unselected"];

  return (
    <Container>
      <div className="offersHeader">
        <header className="offersHeader__header">
          <div>
            <button
              onClick={() => setType(wkType.PRO)}
              className={B2CButtonClasses.join(" ")}
            >
              {offers.buttonOne}
              {/* {t("offers:buttonOne")} */}
            </button>
          </div>
          <div>
            <button
              onClick={() => setType(wkType.B2B)}
              className={B2BButtonClasses.join(" ")}
            >
              {offers.buttonTwo}
              {/* {t("offers:buttonTwo")} */}
            </button>
          </div>
        </header>
        {type === wkType.B2B ? (
          <>
            <p className="offersHeader__text">
              {offers.headerB2B}
              {/* {t("offers:headerB2B")} */}
              <strong>{offers.headerB2B1}</strong>
              {/* <strong>{t("offers:headerB2B1")}</strong> */}
              {offers.headerB2B2}
              {/* {t("offers:headerB2B2")} */}
              <a href="mailto:commercial@teamdoc.fr">
                {offers.headerCourriel}.{/* {t("offers:headerCourriel")}. */}
              </a>
            </p>
            <p className="offersHeader__text">{offers.headerB2B3}</p>
            {/* <p className="offersHeader__text">{t("offers:headerB2B3")}</p> */}
          </>
        ) : (
          <p className="offersHeader__text">{offers.headerB2C}</p>
          // <p className="offersHeader__text">{t("offers:headerB2C")}</p>
        )}
      </div>
    </Container>
  );
};

export default OffersHeader;
