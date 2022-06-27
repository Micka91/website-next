import Container from "../Container/Container";
import Partner from "./Partner";

const datas = [
  {
    title: "Accélérateurs & supports :",
    partners: [
      "/images/partners/jei.png",
      "/images/partners/medicen.png",
      "/images/partners/adrenaline.png",
      "/images/partners/bpi.png",
      "/images/partners/impactHealthcare.png",
      "/images/partners/echofirst.png",
      "/images/partners/branchet.svg",
    ],
  },
  {
    title: "Application créée conformément aux référentiels de :",
    partners: [
      "/images/partners/has.png",
      "/images/partners/ans.png",
      "/images/partners/cnil.png",
      "/images/partners/masante-2022.png",
      "/images/partners/rgpd.png",
    ],
  },
  {
    title: "Serveur HDS :",
    partners: ["/images/partners/cegedim.png"],
  },
];

const Partners = () => {
  return (
    <Container>
      <div className="partners">
        {datas.map((data) => (
          <Partner datas={data} key={data.title} />
        ))}
      </div>
    </Container>
  );
};

export default Partners;
