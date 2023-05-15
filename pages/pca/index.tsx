import { seo } from "../../translations/fr/seo";
// COMPONENTS
import SEO from "./../../components/SEO/SEO";
import BlueCard from "../../components/BlueCard/BlueCard";
import Partners from "../../components/Partners/Partners";
import HeaderPca from "../../components/Headers/HeaderPca/HeaderPca";
import PcaContinuity from "../../components/PcaContinuity/PcaContinuity";
import PcaDeployement from "../../components/PcaDeployement/PcaDeployement";
import PcaFunctionnality from "../../components/PcaFunctionnality/PcaFunctionnality";

const index = () => {
  return (
    <>
      <SEO
        title={seo.pca.title}
        description={seo.pca.description}
        type="article"
      />
      <HeaderPca />
      <PcaContinuity />
      {/* <PcaFunctionnality /> */}
      {/* <PcaDeployement /> */}
      <BlueCard />
      <Partners />
    </>
  );
};

export default index;
