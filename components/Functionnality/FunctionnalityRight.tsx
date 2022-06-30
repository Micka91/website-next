import React, { RefObject } from "react";
import { IAnimation } from "./Functionnality";

interface IProps {
  animationRight: IAnimation;
  innerWidth: number;
  // innerWidth: RefObject<number>;
}

const FunctionnalityRight = ({ animationRight, innerWidth }: IProps) => {
  // Animation du Component BenefitsRight:
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
            Réseau de professionnels
          </h3>
          <p className="functionnalityRight__paragraph">
            Échangez avec vos contacts ou avec d’autres professionnels en créant
            différents réseaux (mon cabinet, mon équipe à l’hôpital)
          </p>
        </div>
        <img
          src="/images/icones/network.png"
          alt="logo_NetworkPro"
          className="functionnalityRight__icones"
        />
      </div>

      <div style={secondAnim} className="functionnalityRight__container">
        <div className="functionnalityRight__content">
          <h3 className="functionnalityRight__title">Droit à la déconnexion</h3>
          <p className="functionnalityRight__paragraph">
            Indiquez votre statut (disponible, occupé, indisponible). Retrouvez
            facilement les personnes disponibles (de garde, d’astreinte,
            d’avis).
          </p>
        </div>
        <img
          src="/images/icones/deconnexion.png"
          alt="logo_secureData"
          className="functionnalityRight__icones"
        />
      </div>

      <div style={thirdAnim} className="functionnalityRight__container">
        <div className="functionnalityRight__content">
          <h3 className="functionnalityRight__title">Tâches planifiées</h3>
          <p className="functionnalityRight__paragraph">
            Assurez la coordination des soins ou un suivi particulier d’un
            patient en créant vos tâches.
          </p>
        </div>
        <img
          src="/images/icones/tasks.png"
          alt="logo_ToolBox"
          className="functionnalityRight__icones"
        />
      </div>
    </div>
  );
};

export default FunctionnalityRight;
