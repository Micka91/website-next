// NEXT
import Image from "next/image";
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
      <Image
        src="/images/footer/teamdoc.png"
        alt={common.logo}
        className="footer__logo"
        width="102"
        height="30"
      />
      <Address />
      <SocialMedia />
    </div>
  );
};

export default Details;
