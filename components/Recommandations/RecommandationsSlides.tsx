/* eslint-disable @next/next/no-img-element */
// TRANSLATION
import { useTranslation } from "next-i18next";

interface IProps {
  currentReco: number;
}

const RecommandationsSlides = ({ currentReco }: IProps) => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  const recommandations = [
    {
      citation: t("home:recommandations.citation1"),
      name: "Dr. Igor Jurcisin",
      status: t("home:recommandations.status1"),
      img: "/images/recommandations/igor.jpg",
    },
    {
      citation: t("home:recommandations.citation2"),
      name: "Dr. Mathilde Holleville",
      status: t("home:recommandations.status2"),
      img: "/images/recommandations/mathilde.jpg",
    },
    {
      citation: t("home:recommandations.citation3"),
      name: "Dr. Paer-Selim Abback",
      status: t("home:recommandations.status3"),
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
              <img
                src={reco.img}
                alt={t("home:recommandations.alt", { name: reco.name })}
              />
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
