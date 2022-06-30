import React from "react";

const FunctionnalityRight = () => {
  return (
    <div className="functionnalityRight">
      <div className="functionnalityRight__container">
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

      <div className="functionnalityRight__container">
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

      <div className="functionnalityRight__container">
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
