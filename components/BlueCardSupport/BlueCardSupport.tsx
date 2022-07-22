/* eslint-disable @next/next/no-img-element */
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Container from "../Container/Container";

const BlueCardSupport = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <Container>
      <div className="blueCardSupport">
        <div className="blueCardSupport__image">
          <img src="/images/support/support.png" alt="" />
        </div>
        <div className="blueCardSupport__text">
          <h3>{t("support:blueCard.title")}</h3>
          <p>
            {t("support:blueCard.texte")}

            <span className="blueCardSupport__link">
              <a href="mailto:support@teamdoc.fr">
                {t("support:blueCard.texte2")}
              </a>
            </span>
          </p>
          <p>{t("support:blueCard.texte3")}</p>
        </div>
      </div>
    </Container>
  );
};

export default BlueCardSupport;
