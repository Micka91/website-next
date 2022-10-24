// REACT
import { useState } from "react";
// COMPONENTS
import RecommandationsSlides from "./RecommandationsSlides";
import Container from "./../Container/Container";
// TRANSLATION
import { home } from "../../translations/fr/home";
import Image from "next/image";

const recommandations = [
  {
    citation: home.recommandations.citation1,
    // citation: t("home:recommandations.citation1"),
    name: "DR Julie Pernet",
    // name: "Dr. Igor Jurcisin",
    status: home.recommandations.status1,
    // status: t("home:recommandations.status1"),
    img: "/images/recommandations/woman.png",
  },
  {
    citation: home.recommandations.citation2,
    // citation: t("home:recommandations.citation2"),
    name: "Dr Arnaud Depil Duval",
    // name: "Dr. Mathilde Holleville",
    status: home.recommandations.status2,
    // status: t("home:recommandations.status2"),
    img: "/images/recommandations/men.png",
  },
  // {
  //   citation: home.recommandations.citation3,
  //   // citation: t("home:recommandations.citation3"),
  //   name: "Dr. Paer-Selim Abback",
  //   status: home.recommandations.status3,
  //   // status: t("home:recommandations.status3"),
  //   img: "/images/recommandations/paer-salim.jpg",
  // },
];

const Recommandations = () => {
  // REACT STATE
  const [currentReco, setCurrentReco] = useState<number>(0);
  const [leftArrowIsHovered, setLeftArrowIsHovered] = useState<boolean>(false);
  const [rightArrowIsHovered, setRightArrowIsHovered] =
    useState<boolean>(false);

  const recommandationsLenght = recommandations.length;

  // FONCTION pour le slide des recommandations vers la droite:
  const displayRecoRight = () => {
    if (currentReco === recommandationsLenght - 1) {
      setCurrentReco(0);
    } else {
      setCurrentReco((c) => (c += 1));
    }
  };

  // FONCTION pour le slide des recommandations vers la gauche:
  const displayRecoLeft = () => {
    if (currentReco === 0) {
      setCurrentReco(recommandationsLenght - 1);
    } else {
      setCurrentReco((c) => (c -= 1));
    }
  };

  return (
    <section className="recommandations">
      <Container>
        <RecommandationsSlides
          currentReco={currentReco}
          recommandations={recommandations}
        />
        <div className="recommandations__arrows">
          <div
            className="recommandations__arrowLeft"
            onClick={displayRecoLeft}
            onMouseOver={() => setLeftArrowIsHovered(true)}
            onMouseLeave={() => setLeftArrowIsHovered(false)}
          >
            <Image
              src={
                leftArrowIsHovered
                  ? "/images/icones/arrowLeftHover.svg"
                  : "/images/icones/arrowLeft.svg"
              }
              alt="patern géométrique"
              width="24"
              height="24"
            />
          </div>
          <div
            className="recommandations__arrowRight"
            onClick={displayRecoRight}
            onMouseOver={() => setRightArrowIsHovered(true)}
            onMouseLeave={() => setRightArrowIsHovered(false)}
          >
            <Image
              src={
                rightArrowIsHovered
                  ? "/images/icones/arrowRightHover.svg"
                  : "/images/icones/arrowRight.svg"
              }
              alt="patern géométrique"
              width="24"
              height="24"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Recommandations;
