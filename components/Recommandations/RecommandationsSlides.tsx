// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { home } from "../../translations/fr/home";

interface IReco {
  citation: string;
  name: string;
  status: string;
  img: string;
}

interface IProps {
  currentReco: number;
  recommandations: IReco[];
}

const RecommandationsSlides = ({ currentReco, recommandations }: IProps) => {
  // I18NEXT HOOKS
  // const { t } = useTranslation();

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
              <Image
                src={reco.img}
                alt={`${home.recommandations.alt}, ${reco.name}`}
                width="80"
                height="80"
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
