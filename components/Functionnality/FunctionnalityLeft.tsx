/* eslint-disable @next/next/no-img-element */
// INTERFACE
import { IAnimation } from "./Functionnality";
// TRANSLATION
import { home } from "../../translations/fr/home";

interface IProps {
  animationLeft: IAnimation;
}

const FunctionnalityLeft = ({ animationLeft }: IProps) => {
  // STYLE FOR ANIMATION
  const firstAnimLeft = {
    transition: animationLeft.transition,
    opacity: animationLeft.opacity,
    transform: animationLeft.transform,
  };
  const secondAnimLeft = {
    transition: animationLeft.transition,
    opacity: animationLeft.opacity,
    transform: animationLeft.transform,
    transitionDelay: "0.5s",
  };
  const thirdAnimLeft = {
    transition: animationLeft.transition,
    opacity: animationLeft.opacity,
    transform: animationLeft.transform,
    transitionDelay: "1s",
  };

  return (
    <div className="functionnalityLeft">
      <div style={firstAnimLeft} className="functionnalityLeft__container">
        <img
          className="functionnalityLeft__icones"
          src="/images/icones/team.svg"
          alt={home.functionnalityLeft.alt1}
        />
        <div className="functionnalityLeft__content">
          <h3 className="functionnalityLeft__title">
            {home.functionnalityLeft.h3_1}
          </h3>
          <p className="functionnalityLeft__paragraph">
            {home.functionnalityLeft.p1}
          </p>
        </div>
      </div>

      <div style={secondAnimLeft} className="functionnalityLeft__container">
        <img
          className="functionnalityLeft__icones"
          src="/images/icones/cloud.svg"
          alt={home.functionnalityLeft.alt2}
        />
        <div className="functionnalityLeft__content">
          <h3 className="functionnalityLeft__title">
            {" "}
            {home.functionnalityLeft.h3_2}
          </h3>
          <p className="functionnalityLeft__paragraph">
            {home.functionnalityLeft.p2}
          </p>
        </div>
      </div>

      <div style={thirdAnimLeft} className="functionnalityLeft__container">
        <img
          className="functionnalityLeft__icones"
          src="/images/icones/form.png"
          alt={home.functionnalityLeft.alt3}
        />
        <div className="functionnalityLeft__content">
          <h3 className="functionnalityLeft__title">
            {home.functionnalityLeft.h3_3}
          </h3>
          <p className="functionnalityLeft__paragraph">
            {home.functionnalityLeft.p3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunctionnalityLeft;
