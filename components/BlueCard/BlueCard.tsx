import Link from "next/link";
import { PATHS } from "../../enums/paths";
import Container from "../Container/Container";
import Button from "./../Button/Button";

const BlueCard = () => {
  return (
    <Container>
      <div className="blueCard">
        <div className="blueCard__container">
          <img
            src="/images/logo/teamdoc-logo.svg"
            alt="Logo de teamdoc"
            className="blueCard__logo"
          />

          <div className="blueCard__content">
            <h2>Téléchargez gratuitement l’application !</h2>
            <p>L’application est disponible sur les stores Android et iOS.</p>
          </div>
        </div>
        <div className="blueCard__buttons">
          <Button className="button__white">
            télécharger
            <img src="/images/icones/arrow.svg" alt="arrow"></img>
          </Button>
          <Button className="button__price">
            <Link href={PATHS.OFFERS} title="Lien page offre">
              voir les prix
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BlueCard;
