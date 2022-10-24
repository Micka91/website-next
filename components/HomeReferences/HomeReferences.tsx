// NEXT
import Image from "next/image";
// TRANSLATION
import { partners } from "../../translations/fr/partners";
import { footer } from "../../translations/fr/footer";
import { home } from "../../translations/fr/home";
// COMPONENTS
import Container from "../Container/Container";

const datas = {
  title: home.references.title,
  partners: [
    { src: "/images/press/APHP.png", alt: partners.aphp },
    { src: "/images/partners/ssa.png", alt: partners.ssa },
    { src: "/images/partners/CNS.png", alt: partners.cns },
    { src: "/images/partners/dmh.png", alt: partners.dmh },
    { src: "/images/partners/biolabs.webp", alt: partners.biolabs },
    { src: "/images/partners/echofirst.png", alt: partners.echofirst },
  ],
};

const HomeReferences = () => {
  return (
    <Container>
      <div className="homeReferences">
        {/* <h2 className="homeReferences__title">{datas.title}</h2> */}
        <div className="homeReferences__references">
          {datas.partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.src}
              alt={partner.alt}
              width="150"
              height="80"
              objectFit="contain"
              loading="eager"
              className="homeReferences__reference"
            />
          ))}
        </div>
        {/* <div className="homeReferences__download">
          <a
            href="https://apple.co/35jrBTM"
            target="_blank"
            rel="noopener noreferrer"
            title={footer.col4.titleAppStore}
          >
            <Image
              src="/images/logo/appStore-home.png"
              alt={footer.col4.altAppStore}
              width="200"
              height="60"
              loading="eager"
            />
          </a>
          <a
            href="https://bit.ly/2nzXBC6"
            target="_blank"
            rel="noopener noreferrer"
            title={footer.col4.titleGooglePlay}
          >
            <Image
              src="/images/logo/googlePlay-home.png"
              alt={footer.col4.altGooglePlay}
              width="200"
              height="60"
              loading="eager"
            />
          </a>
        </div> */}
      </div>
    </Container>
  );
};

export default HomeReferences;
