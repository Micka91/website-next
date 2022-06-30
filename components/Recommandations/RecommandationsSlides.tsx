import React from "react";

interface IProps {
  currentReco: number;
}

const RecommandationsSlides = ({ currentReco }: IProps) => {
  const recommandations = [
    {
      citation:
        "Les fiches patients permettent d’avoir toutes les informations sur les patients en direct, le suivi, les diagnostics à faire, le résultat des examens… Ça améliore énormément la fluidité des transmissions médicales de nos patients en Anesthésie-Réanimation.",
      name: "Dr. Igor Jurcisin",
      status:
        "Médecin au sein du département d’Anesthésie-Réanimation de l’hôpital Beaujon",
      img: "/images/recommandations/igor.jpg",
    },
    {
      citation:
        "Les bips que nous utilisons sont clairement source d'un ralentissement de la communication. Team'Doc permet de créer plus de liens entre les séniors et les internes, et inter-spécialités.",
      name: "Dr. Mathilde Holleville",
      status:
        "Médecin au sein du département d’Anesthésie-Réanimation de l’hôpital Beaujon",
      img: "/images/recommandations/mathilde.jpg",
    },
    {
      citation:
        "Aujourd'hui, chacun fait comme il veut pour les transmissions médicales, certains notent tout sur une feuille de papier, d'autres relèvent uniquement les tâches à effectuer. Le résultat c'est qu'on passe beaucoup de temps à répéter les informations et certaines sont parfois oubliées.",
      name: "Dr. Paer-Selim Abback",
      status:
        "Médecin au sein du département d’Anesthésie-Réanimation de l’hôpital Beaujon",
      img: "/images/recommandations/paer-salim.jpg",
    },
  ];

  return (
    <div className="recommandationsSlides">
      {recommandations.map((reco, i) => (
        <div
          className={`recommandationsSlides__slide ${
            i === currentReco ? "recommandationsSlides__active" : ""
          }`}
          key={i}
        >
          <cite className="recommandationsSlides__cite">{reco.citation}</cite>
          <div className="recommandationsSlides__container">
            <div className="recommandationsSlides__picture">
              <img src={reco.img} alt={`Photo de ${reco.name}`} />
            </div>
            <div className="recommandationsSlides__content">
              <h4>{reco.name}</h4>
              <p>{reco.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommandationsSlides;
