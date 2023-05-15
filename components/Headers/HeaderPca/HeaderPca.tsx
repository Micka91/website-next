// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { pca } from "../../../translations/fr/pca";
// COMPONENTS
import Background from "../../Background/Background";
import Hero from "../../Hero/Hero";

const HeaderPca = () => {
  return (
    <section className="pca__header">
      <Background
        src="/images/headers/solutions.png"
        alt="Image de fond accueil de teamdoc"
        className="header__pca"
      >
        <Hero>
          <div className="pca__banner">
            <div className="pca__container">
              <h1 className="pca__title">{pca.title}</h1>
              <p className="pca__paragraph">{pca.text}</p>
            </div>
            <div>
              <Image
                src="/images/pca/header.png"
                alt=""
                className="pca__image"
                width="800"
                height="800"
                objectFit="contain"
              />
            </div>
          </div>
        </Hero>
      </Background>
    </section>
  );
};

export default HeaderPca;
