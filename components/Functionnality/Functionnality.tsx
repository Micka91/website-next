import React from "react";
import FunctionnalityLeft from "./FunctionnalityLeft";
import FunctionnalityRight from "./FunctionnalityRight";
import Container from "./../Container/Container";

const Functionnality = () => {
  return (
    <section className="functionnality">
      <Container>
        <div className="functionnality__titleContainer">
          <h2 className="functionnality__title">
            Les fonctionnalités de l’application
          </h2>
          <p className="functionnality__paragraph">
            Une solution sécurisée avec des fonctionnalités simples et
            interactives.
          </p>
        </div>
        <div className="functionnality__container">
          <FunctionnalityLeft />
          <div className="functionnality__images">
            <img
              src="/images/home/phone.png"
              alt="Image d'un téléphone montrant l'application teamdoc"
            />
          </div>
          <FunctionnalityRight />
        </div>
      </Container>
    </section>
  );
};

export default Functionnality;
