// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Container from "../Container/Container";
import Partner from "./Partner";

const Partners = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  const datas = [
    {
      title: t("partners:title.col1"),
      partners: [
        { src: "/images/partners/medicen.png", alt: t("partners:medicen") },
        {
          src: "/images/partners/adrenaline.png",
          alt: t("partners:adrenaline"),
        },
        { src: "/images/partners/bpi.png", alt: t("partners:bpi") },
        {
          src: "/images/partners/impactHealthcare.png",
          alt: t("partners:impact"),
        },
        { src: "/images/partners/branchet.svg", alt: t("partners:branchet") },
        { src: "/images/partners/intertio.png", alt: t("partners:intertio") },
        { src: "/images/partners/FCPTS.png", alt: t("partners:fcpts") },
        { src: "/images/partners/psc.png", alt: t("partners:psc") },
        { src: "/images/partners/SCC.png", alt: t("partners:scc") },
        // Doc e-santé
        // { src: "/images/partners/branchet.svg", alt: t("partners:branchet") },
      ],
    },
    {
      title: t("partners:title.col2"),
      partners: [
        { src: "/images/partners/has.png", alt: t("partners:has") },
        { src: "/images/partners/ans.png", alt: t("partners:ans") },
        { src: "/images/partners/cnil.png", alt: t("partners:cnil") },
        {
          src: "/images/partners/masante-2022.png",
          alt: t("partners:masante"),
        },
        { src: "/images/partners/rgpd.png", alt: t("partners:rgpd") },
        // Conseil e-santé
        // { src: "/images/partners/rgpd.png", alt: t("partners:rgpd") },
      ],
    },
    {
      title: t("partners:title.col3"),
      partners: [
        { src: "/images/partners/jei.png", alt: t("partners:jei") },
        { src: "/images/press/APHP.png", alt: t("partners:aphp") },
        { src: "/images/partners/ssa.png", alt: t("partners:ssa") },
        { src: "/images/partners/CNS.png", alt: t("partners:cns") },
        { src: "/images/partners/dmh.png", alt: t("partners:dmh") },
        { src: "/images/partners/biolabs.webp", alt: t("partners:biolabs") },
        { src: "/images/partners/nabla.png", alt: t("partners:nabla") },
        { src: "/images/partners/echofirst.png", alt: t("partners:echofirst") },
        // { src: "/images/partners/jei.png", alt: t("partners:jei") },
      ],
    },
    {
      title: t("partners:title.col4"),
      partners: [
        { src: "/images/partners/cegedim.png", alt: t("partners:cegedim") },
      ],
    },
    {
      title: t("partners:title.col5"),
      partners: [
        { src: "/images/partners/caih.jpeg", alt: t("partners:caih") },
        { src: "/images/partners/ugap.png", alt: t("partners:ugap") },
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
