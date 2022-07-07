// TRANSLATION
import { useTranslation } from "next-i18next";

const ContactInformations = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <div className="contactInformations">
      <h2 className="contactInformations__title">
        {t("contact:titleInformation")}
      </h2>
      <p>
        <em>
          {t("contact:text1")}{" "}
          <a href="http://www.teamdoc.fr"> www.teamdoc.fr</a>
        </em>
      </p>
      <p>
        <em>{t("contact:text2")}</em>
      </p>
      <p>
        <em>{t("contact:text3")}</em>
      </p>
      <p>
        {t("contact:text4")}{" "}
        <a href="mailto:rgpd@teamdoc.fr">rgpd@teamdoc.fr</a>
      </p>
      <p>
        <em>{t("contact:text5")}</em>
      </p>
    </div>
  );
};

export default ContactInformations;
