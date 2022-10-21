/* eslint-disable @next/next/no-img-element */

// REACT
import { useState, useEffect, useRef, useCallback } from "react";
// COMPONENTS
import FunctionnalityLeft from "./FunctionnalityLeft";
import FunctionnalityRight from "./FunctionnalityRight";
import Container from "./../Container/Container";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { home } from "../../translations/fr/home";

export interface IAnimation {
  transition: string;
  opacity: string;
  transform: string;
}

// INITIAL CSS VALUE
const initialLeftAnimation = {
  transition: "all 0.5s ease-out",
  opacity: "0",
  transform: "translate3d(-100px, 0, 0)",
};

const initialRightAnimation = {
  transition: "all 0.5s ease-out",
  opacity: "0",
  transform: "translate3d(100px, 0, 0)",
};

const scrollAnimation = {
  transition: "all 0.5s ease-out",
  opacity: "1",
  transform: "translate3d(0, 0, 0)",
};

const Functionnality = () => {
  // REACT HOOKS
  const containerRef = useRef(null);
  // i18NEXT HOOK
  // const { t } = useTranslation();
  // REACT STATE
  const [innerWidth, setInnerWidth] = useState(0);
  const [animationLeft, setAnimationLeft] = useState(initialLeftAnimation);
  const [animationRight, setAnimationRight] = useState(initialRightAnimation);

  const handleScroll = useCallback(() => {
    const card: HTMLElement = containerRef.current!;
    let scrollPosition = card?.offsetHeight + card?.offsetHeight / 5;

    if (window.scrollY > 1200) {
      scrollPosition = card?.offsetHeight + card?.offsetHeight / 16;
    }
    if (window.scrollY > scrollPosition) {
      setAnimationRight(scrollAnimation);
      setAnimationLeft(scrollAnimation);
    } else {
      setAnimationLeft(initialLeftAnimation);
      setAnimationRight(initialRightAnimation);
    }
  }, []);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="functionnality" ref={containerRef}>
      <Container>
        <div className="functionnality__titleContainer">
          <h2 className="functionnality__title">
            {home.functionnalities.h2}
            {/* {t("home:functionnalities.h2")} */}
          </h2>
          <p className="functionnality__paragraph">
            {home.functionnalities.p}
            {/* {t("home:functionnalities.p")} */}
          </p>
        </div>
        <div className="functionnality__container">
          <FunctionnalityLeft animationLeft={animationLeft} />
          <div className="functionnality__images">
            <img
              src="/images/home/phone.png"
              alt={home.functionnalities.alt}
              // alt={t("home:functionnalities.alt")}
            />
          </div>
          <FunctionnalityRight
            animationRight={animationRight}
            innerWidth={innerWidth}
          />
        </div>
      </Container>
    </section>
  );
};

export default Functionnality;
