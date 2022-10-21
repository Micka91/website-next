// TRANSLATION
// import { useTranslation } from "next-i18next";
import { contact } from "../../translations/fr/contact";

const ContactInformations = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <div className="contactInformations">
      <h2 className="contactInformations__title">
        {contact.titleInformation}
        {/* {t("contact:titleInformation")} */}
      </h2>
      <p>
        <em>
          {contact.text1} {/* {t("contact:text1")}{" "} */}
          <a href="http://www.teamdoc.fr"> www.teamdoc.fr</a>
        </em>
      </p>
      <p>
        <em>{contact.text2}</em>
        {/* <em>{t("contact:text2")}</em> */}
      </p>
      <p>
        <em>{contact.text3}</em>
        {/* <em>{t("contact:text3")}</em> */}
      </p>
      <p>
        {contact.text4} {/* {t("contact:text4")}{" "} */}
        <a href="mailto:rgpd@teamdoc.fr">rgpd@teamdoc.fr</a>
      </p>
      <p>
        <em>{contact.text5}</em>
        {/* <em>{t("contact:text5")}</em> */}
      </p>
    </div>
  );
};

export default ContactInformations;
