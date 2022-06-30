import React from "react";

const FunctionnalityLeft = () => {
  return (
    <div className="functionnalityLeft">
      <div className="functionnalityLeft__container">
        <img
          className="functionnalityLeft__icones"
          src="/images/icones/team.svg"
          alt="logo_work_team"
        />
        <div className="functionnalityLeft__content">
          <h3 className="functionnalityLeft__title">
            Communication 100% sécurisée
          </h3>
          <p className="functionnalityLeft__paragraph">
            Échangez des informations, photos et vidéos par la messagerie
            instantanée sécurisée.
          </p>
        </div>
      </div>

      <div className="functionnalityLeft__container">
        <img
          className="functionnalityLeft__icones"
          src="/images/icones/cloud.svg"
          alt="logo_ToolBox"
        />
        <div className="functionnalityLeft__content">
          <h3 className="functionnalityLeft__title">Cloud sécurisé</h3>
          <p className="functionnalityLeft__paragraph">
            Stockez et partagez des médias et documents et partagez-les avec
            votre équipe ou d’autres professionnels de santé.
          </p>
        </div>
      </div>

      <div className="functionnalityLeft__container">
        <img
          className="functionnalityLeft__icones"
          src="/images/icones/form.png"
          alt="logo_transfer_team"
        />
        <div className="functionnalityLeft__content">
          <h3 className="functionnalityLeft__title">
            Fiches de transmission numériques
          </h3>
          <p className="functionnalityLeft__paragraph">
            Remplissez des fiches patients préformatées de votre choix pour
            gagner du temps et éviter de perdre des informations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunctionnalityLeft;
