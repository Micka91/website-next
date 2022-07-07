/* eslint-disable @next/next/no-img-element */
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Background from "../../Background/Background";
import Hero from "../../Hero/Hero";

const HeaderSolutions = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="solutions__header">
      <Background
        src="/images/headers/solutions.png"
        alt="Image de fond accueil de teamdoc"
        className="header__solutions"
      >
        <Hero>
          <div className="solutions__banner">
            <div className="solutions__container">
              <h1 className="solutions__title">{t("solution:title")}</h1>
              <p className="solutions__paragraph">{t("solution:text")}</p>
            </div>
            <div>
              <img
                src="/images/solutions/soignants.png"
                alt=""
                className="solutions__image"
              />
            </div>
          </div>
        </Hero>
      </Background>
    </section>
  );
};

export default HeaderSolutions;
