import Container from "../Container/Container";
import GooglePlay from "../GooglePlay/GooglePlay";
import SocialMedia from "../SocialMedia/SocialMedia";
import AppStore from "./../AppStore/AppStore";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer">
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
                <span className="footer__adress">
                  22 rue Drouot- 75009 Paris
                </span>
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
          <div className="footer__container">
            <h4 className="footer__title">Informations</h4>
            <ul className="footer__links">
              <li className="footer__link">Support technique</li>
              <li className="footer__link">Nous rejoindre</li>
              <li className="footer__link"></li>
            </ul>
          </div>
          <div className="footer__container">
            <h4 className="footer__title">Conditions & politiques</h4>
            <ul className="footer__links">
              <li className="footer__link">Sécurité</li>
              <li className="footer__link">CGU</li>
              <li className="footer__link">CGV</li>
              <li className="footer__link">Mentions légales</li>
              <li className="footer__link">Politique de confidentialité</li>
              <li className="footer__link">Politique de cookies</li>
            </ul>
          </div>
          <div className="footer__container">
            <h4 className="footer__title">Téléchargements</h4>
            <p className="footer__paragraph">
              L’application Team’Doc est disponible gratuitement, sur les stores
              !
            </p>
            <div className="footer__buttons">
              <AppStore />
              <GooglePlay />
            </div>
          </div>
        </div>
      </Container>
      <div className="footer__copyright">
        Copyright 2022 &copy; Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
