// REACT
import { useContext } from "react";
//CONTEXT
import { DrawerContext } from "./../../context/DrawerContext";

interface IProps {
  offer: {
    id: string;
    titleCard: string;
    offers: string;
    image: string;
    image2?: string;
    pricePerMonth: number;
    unity: string;
    cents?: number;
    perMonth: string;
    or?: string;
    pricePerYear?: string;
    perYear?: string;
    options: string[];
    downloadNow: string;
  };
  row: number;
}

const OfferCard = ({ offer, row }: IProps) => {
  // PROPS
  const {
    titleCard,
    offers,
    image,
    image2,
    pricePerMonth,
    unity,
    perMonth,
    or,
    perYear,
    cents,
    pricePerYear,
    options,
    downloadNow,
  } = offer;
  // REACT HOOKS
  const { handleOpen } = useContext(DrawerContext);

  return (
    <div className="offerCard">
      <div className="offerCard__title">
        <p>{titleCard}</p>
        <p className="offerCard__title--dot"></p>
        <p className="offerCard__title--offers">{offers}</p>
      </div>
      <div className="offerCard__image">
        <img
          src={image}
          alt=""
          className={`offerCard__image--one ${
            image2 ? `offerCard__image--one__double` : ""
          }`}
        />
        {image2 && (
          <img src={image2} alt="" className="offerCard__image--two" />
        )}
      </div>
      <div className="offerCard__price">
        <div className="offerCard__price--month">
          <p>{pricePerMonth}</p>
          <span className="offerCard__unit">{unity}</span>
          {cents && <p>{cents}</p>}
          <span>{perMonth}</span>
        </div>
        {pricePerYear && (
          <p className="offerCard__price__year">
            <span>{or} </span>
            <span className="offerCard__price__year--price">
              {pricePerYear}
            </span>{" "}
            <span>/{perYear}</span>
          </p>
        )}
      </div>
      <ul className="offerCard__options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`offerCard__options--option ${
              index > 1 && row !== 0 && `offerCard__options--option__color`
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleOpen} className="offerCard__downloadButton">
        {downloadNow}
      </button>
    </div>
  );
};

export default OfferCard;
