/* eslint-disable @next/next/no-img-element */
// INTERFACE
import { IAnimation } from "./Functionnality";
// TRANSLATION
import { home } from "../../translations/fr/home";

interface IProps {
  animationRight: IAnimation;
  innerWidth: number;
}

const FunctionnalityRight = ({ animationRight, innerWidth }: IProps) => {
  // STYLE FOR ANIMATION
  const firstAnim = {
    transition: animationRight.transition,
    opacity: animationRight.opacity,
    transform: animationRight.transform,
    transitionDelay: innerWidth > 576 ? "0s" : "1.5s",
  };
  const secondAnim = {
    transition: animationRight.transition,
    opacity: animationRight.opacity,
    transform: animationRight.transform,
    transitionDelay: innerWidth > 576 ? "0.5s" : "2s",
  };
  const thirdAnim = {
    transition: animationRight.transition,
    opacity: animationRight.opacity,
    transform: animationRight.transform,
    transitionDelay: innerWidth > 576 ? "1s" : "2.5s",
  };

  return (
    <div className="functionnalityRight">
      <div style={firstAnim} className="functionnalityRight__container">
        <div className="functionnalityRight__content">
          <h3 className="functionnalityRight__title">
            {home.functionnalityRight.h3_1}
          </h3>
          <p className="functionnalityRight__paragraph">
            {home.functionnalityRight.p1}
          </p>
        </div>
        <img
          src="/images/icones/network.png"
          alt={home.functionnalityRight.alt1}
          className="functionnalityRight__icones"
        />
      </div>

      <div style={secondAnim} className="functionnalityRight__container">
        <div className="functionnalityRight__content">
          <h3 className="functionnalityRight__title">
            {home.functionnalityRight.h3_2}
          </h3>
          <p className="functionnalityRight__paragraph">
            {home.functionnalityRight.p2}
          </p>
        </div>
        <img
          src="/images/icones/deconnexion.png"
          alt={home.functionnalityRight.alt2}
          className="functionnalityRight__icones"
        />
      </div>

      <div style={thirdAnim} className="functionnalityRight__container">
        <div className="functionnalityRight__content">
          <h3 className="functionnalityRight__title">
            {home.functionnalityRight.h3_3}
          </h3>
          <p className="functionnalityRight__paragraph">
            {home.functionnalityRight.p3}
          </p>
        </div>
        <img
          src="/images/icones/tasks.png"
          alt={home.functionnalityRight.alt3}
          className="functionnalityRight__icones"
        />
      </div>
    </div>
  );
};

export default FunctionnalityRight;
