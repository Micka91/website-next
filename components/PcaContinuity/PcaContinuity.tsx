// TRANSLATION
import { pca } from "../../translations/fr/pca";
// COMPONENTS
import Container from "../Container/Container";
import PcaCard from "../PcaCard/PcaCard";

const PcaContinuity = () => {
  const pcaContent = [
    {
      src: "/images/pca/pca1.jpeg",
      data: {
        title: pca.explanations.card1.title,
        paragraph: pca.explanations.card1.text,
      },
      reverse: false,
    },
    {
      src: "/images/pca/pca2.png",
      data: {
        title: pca.explanations.card2.title,
        paragraph: pca.explanations.card2.text,
        list: [
          pca.explanations.card2.li1,
          pca.explanations.card2.li2,
          pca.explanations.card2.li3,
          pca.explanations.card2.li4,
        ],
      },
      reverse: true,
    },
  ];

  return (
    <section className="pcaCards">
      <Container>
        {pcaContent.map((content) => (
          <PcaCard key={content.src} content={content} />
        ))}
      </Container>
    </section>
  );
};

export default PcaContinuity;
