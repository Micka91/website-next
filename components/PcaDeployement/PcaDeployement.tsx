// TRANSLATION
import { pca } from "../../translations/fr/pca";
import Container from "../Container/Container";
import PcaDeployementCard from "../PcaDeployementCard/PcaDeployementCard";

const cards = [
  {
    title: pca.deployement.card1.title,
    list: [pca.deployement.card1.li1, pca.deployement.card1.li2],
  },
  {
    title: pca.deployement.card2.title,
    list: [
      pca.deployement.card2.li1,
      pca.deployement.card2.li2,
      pca.deployement.card2.li3,
    ],
  },
];

const PcaDeployement = () => {
  return (
    <section className="pcaDeployement">
      <Container>
        <h2 className="pcaDeployement__title">{pca.deployement.title}</h2>
        <div className="pcaDeployement__container">
          <div className="pcaDeployement__cards">
            {cards.map((card, index) => (
              <PcaDeployementCard
                key={index}
                title={card.title}
                list={card.list}
              />
            ))}
          </div>
          <div className="pcaDeployement__priceContainer">
            <h3 className="pcaDeployement__priceTitle">
              {pca.deployement.prices.title}
              <span className="pcaDeployement__pricePerMonth">
                {pca.deployement.prices.perMonth}
              </span>
            </h3>
            <p className="pcaDeployement__priceContent">
              {pca.deployement.prices.text}
            </p>
            <span className="pcaDeployement__priceMention">
              {pca.deployement.prices.mention}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PcaDeployement;
