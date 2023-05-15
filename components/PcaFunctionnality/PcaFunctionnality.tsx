// REACT
import { useState } from "react";
// NEXT
import Image from "next/image";
// COMPONENTS
import Container from "../Container/Container";
// TRANSLATION
import { pca } from "../../translations/fr/pca";
import PcaFunctionnalityCard from "../PcaFunctionnalityCard/PcaFunctionnalityCard";

const PcaFonctionnality = () => {
  // REACT STATE
  const [value, setValue] = useState(0);

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore maxime explicabo nulla adipisci aperiam enim sint alias voluptate neque sequi quas quod, saepe sapiente, velit quaerat, atque mollitia asperiores!";

  return (
    <section className="pcaFunctionnality">
      <Container>
        <nav className="pcaFunctionnality__menu">
          <button
            className={value === 0 ? "active" : ""}
            onClick={() => setValue(0)}
            role="tab"
          >
            Messagerie instantanée
          </button>
          <button
            className={value === 1 ? "active" : ""}
            onClick={() => setValue(1)}
            role="tab"
          >
            Cloud sécurisé
          </button>
          <button
            className={value === 2 ? "active" : ""}
            onClick={() => setValue(2)}
            role="tab"
          >
            Fiche de transmission
          </button>
          <button
            className={value === 3 ? "active" : ""}
            onClick={() => setValue(3)}
            role="tab"
          >
            Tâches
          </button>
        </nav>
        <div className="pcaFunctionnality__content">
          {value === 0 ? (
            <PcaFunctionnalityCard
              image="/images/pca/pca1.jpeg"
              title="Messagerie instantanée"
              text={lorem}
            />
          ) : value === 1 ? (
            <PcaFunctionnalityCard
              image="/images/pca/pca1.jpeg"
              title="Cloud sécurisé"
              text={lorem}
            />
          ) : value === 2 ? (
            <PcaFunctionnalityCard
              image="/images/pca/pca1.jpeg"
              title="Fiche de transmission"
              text={lorem}
            />
          ) : (
            <PcaFunctionnalityCard
              image="/images/pca/pca1.jpeg"
              title="Tâches"
              text={lorem}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default PcaFonctionnality;
