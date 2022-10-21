// TRANSLATION
import { partners } from "../../translations/fr/partners";
// COMPONENTS
import Container from "../Container/Container";
import Partner from "./Partner";

const Partners = () => {
  const datas = [
    {
      title: partners.title.col1,
      partners: [
        { src: "/images/partners/medicen.png", alt: partners.medicen },
        {
          src: "/images/partners/adrenaline.png",
          alt: partners.adrenaline,
        },
        { src: "/images/partners/bpi.png", alt: partners.bpi },
        {
          src: "/images/partners/impactHealthcare.png",
          alt: partners.impact,
        },
        { src: "/images/partners/branchet.svg", alt: partners.branchet },
        { src: "/images/partners/intertio.png", alt: partners.intertio },
        { src: "/images/partners/FCPTS.png", alt: partners.fcpts },
        { src: "/images/partners/psc.png", alt: partners.psc },
        { src: "/images/partners/SCC.png", alt: partners.scc },
        // Doc e-santé
        // { src: "/images/partners/branchet.svg", alt: partners.branchet },
      ],
    },
    {
      title: partners.title.col2,
      partners: [
        { src: "/images/partners/has.png", alt: partners.has },
        { src: "/images/partners/ans.png", alt: partners.ans },
        { src: "/images/partners/cnil.png", alt: partners.cnil },
        {
          src: "/images/partners/masante-2022.png",
          alt: partners.masante,
        },
        { src: "/images/partners/rgpd.png", alt: partners.rgpd },
        // Conseil e-santé
        // { src: "/images/partners/rgpd.png", alt: partners.rgpd },
      ],
    },
    {
      title: partners.title.col3,
      partners: [
        { src: "/images/partners/jei.png", alt: partners.jei },
        { src: "/images/press/APHP.png", alt: partners.aphp },
        { src: "/images/partners/ssa.png", alt: partners.ssa },
        { src: "/images/partners/CNS.png", alt: partners.cns },
        { src: "/images/partners/dmh.png", alt: partners.dmh },
        { src: "/images/partners/biolabs.webp", alt: partners.biolabs },
        { src: "/images/partners/nabla.png", alt: partners.nabla },
        { src: "/images/partners/echofirst.png", alt: partners.echofirst },
        // { src: "/images/partners/jei.png", alt: partners.jei },
      ],
    },
    {
      title: partners.title.col4,
      partners: [
        { src: "/images/partners/cegedim.png", alt: partners.cegedim },
      ],
    },
    {
      title: partners.title.col5,
      partners: [
        { src: "/images/partners/caih.jpeg", alt: partners.caih },
        { src: "/images/partners/ugap.png", alt: partners.ugap },
      ],
    },
  ];

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
