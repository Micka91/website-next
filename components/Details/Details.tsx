/* eslint-disable @next/next/no-img-element */
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { common } from "../../translations/fr/common";
// COMPONENTS
import SocialMedia from "./../SocialMedia/SocialMedia";
import Address from "./../Address/Address";

const Details = () => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();
  return (
    <div className="footer__container">
      <img
        src="/images/footer/teamdoc.png"
        alt={common.logo}
        // alt={t("common:logo")}
        className="footer__logo"
      />
      <Address />
      <SocialMedia />
    </div>
  );
};

export default Details;
