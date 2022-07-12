/* eslint-disable @next/next/no-img-element */
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import SocialMedia from "./../SocialMedia/SocialMedia";

const Address = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <address>
      <div className="footer__adressContainer">
        <img
          src="/images/footer/address.png"
          alt={t("footer:altAddress")}
          className="footer__image"
        />
        <span className="footer__adress">22 rue Drouot- 75009 Paris</span>
      </div>
      <div className="footer__mailContainer">
        <img
          src="/images/footer/mail.png"
          alt={t("footer:altMail")}
          className="footer__image"
        />
        <a href="mailto:contact@teamdoc.fr" className="footer__mail">
          contact@teamdoc.fr
        </a>
      </div>
    </address>
  );
};

export default Address;
