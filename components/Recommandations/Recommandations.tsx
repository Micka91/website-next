import { useState } from "react";
import RecommandationsSlides from "./RecommandationsSlides";
import Container from "./../Container/Container";

const Recommandations = () => {
  const [currentReco, setCurrentReco] = useState<number>(0);

  // FONCTION pour le slide des recommandations vers la droite:
  const displayRecoRight = () => {
    if (currentReco === 2) {
      setCurrentReco(0);
    } else {
      setCurrentReco((c) => (c += 1));
    }
  };

  // FONCTION pour le slide des recommandations vers la gauche:
  const displayRecoLeft = () => {
    if (currentReco === 0) {
      setCurrentReco(2);
    } else {
      setCurrentReco((c) => (c -= 1));
    }
  };

  return (
    <section className="recommandations">
      <Container>
        <RecommandationsSlides currentReco={currentReco} />
        <div className="recommandations__arrows">
          <div
            className="recommandations__arrowLeft"
            onClick={displayRecoLeft}
          ></div>
          <div
            className="recommandations__arrowRight"
            onClick={displayRecoRight}
          ></div>
        </div>
      </Container>
    </section>
  );
};

export default Recommandations;
