/* eslint-disable @next/next/no-img-element */
// NEXT
import Image from "next/image";
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
        <Image
          src="/images/footer/address.png"
          alt={t("footer:altAddress")}
          loading="eager"
          className="footer__image"
          width={18}
          height={18}
        />
        <span className="footer__adress">22 rue Drouot- 75009 Paris</span>
      </div>
      <div className="footer__mailContainer">
        <Image
          src="/images/footer/mail.png"
          alt={t("footer:altMail")}
          loading="eager"
          className="footer__image"
          width={18}
          height={18}
        />
        <a href="mailto:contact@teamdoc.fr" className="footer__mail">
          contact@teamdoc.fr
        </a>
      </div>
    </address>
  );
};

export default Address;
