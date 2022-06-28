import SocialMedia from "./../SocialMedia/SocialMedia";

const Address = () => {
  return (
    <div className="footer__container">
      <img
        src="/images/footer/teamdoc.png"
        alt="logo teamdoc"
        className="footer__logo"
      />
      <address>
        <div className="footer__adressContainer">
          <img
            src="/images/footer/address.png"
            alt="logo teamdoc"
            className="footer__image"
          />
          <span className="footer__adress">22 rue Drouot- 75009 Paris</span>
        </div>
        <div className="footer__mailContainer">
          <img
            src="/images/footer/mail.png"
            alt="logo teamdoc"
            className="footer__image"
          />
          <a href="mailto:contact@teamdoc.fr" className="footer__mail">
            contact@teamdoc.fr
          </a>
        </div>
      </address>
      <SocialMedia />
    </div>
  );
};

export default Address;
