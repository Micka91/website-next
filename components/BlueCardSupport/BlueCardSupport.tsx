// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { support } from "../../translations/fr/support";
// COMPONENTS
import Container from "../Container/Container";

const BlueCardSupport = () => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();

  return (
    <Container>
      <div className="blueCardSupport">
        <div className="blueCardSupport__image">
          <Image
            src="/images/support/support.png"
            alt="fond bleu"
            height="244"
            width="244"
          />
        </div>
        <div className="blueCardSupport__text">
          <h3>{support.blueCard.title}</h3>
          {/* <h3>{t("support:blueCard.title")}</h3> */}
          <p>
            {support.blueCard.texte}
            {/* {t("support:blueCard.texte")} */}

            <span className="blueCardSupport__link">
              <a href="mailto:support@teamdoc.fr">
                {support.blueCard.texte2}
                {/* {t("support:blueCard.texte2")} */}
              </a>
            </span>
          </p>
          <p>{support.blueCard.texte3}</p>
          {/* <p>{t("support:blueCard.texte3")}</p> */}
        </div>
      </div>
    </Container>
  );
};

export default BlueCardSupport;
