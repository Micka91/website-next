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
      title: "Accélérateurs & supports :",
      partners: [
        { src: "/images/partners/jei.png", alt: t("partners:jei") },
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
        { src: "/images/partners/echofirst.png", alt: t("partners:echofirst") },
        { src: "/images/partners/branchet.svg", alt: t("partners:branchet") },
      ],
    },
    {
      title: "Application créée conformément aux référentiels de :",
      partners: [
        { src: "/images/partners/has.png", alt: t("partners:has") },
        { src: "/images/partners/ans.png", alt: t("partners:ans") },
        { src: "/images/partners/cnil.png", alt: t("partners:cnil") },
        {
          src: "/images/partners/masante-2022.png",
          alt: t("partners:masante"),
        },
        { src: "/images/partners/rgpd.png", alt: t("partners:rgpd") },
      ],
    },
    {
      title: "Serveur HDS :",
      partners: [
        { src: "/images/partners/cegedim.png", alt: t("partners:cegedim") },
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
