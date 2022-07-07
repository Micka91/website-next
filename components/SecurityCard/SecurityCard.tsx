/* eslint-disable @next/next/no-img-element */

interface IProps {
  data: {
    image: string;
    alt: string;
    title: string;
    strongText: string;
    text: string;
    validation1?: string;
    validation2?: string;
  };
}

const SecurityCard = ({ data }: IProps) => {
  const { image, alt, title, strongText, text, validation1, validation2 } =
    data;
  return (
    <div className="security__card">
      <img src={image} alt={alt} />
      <h2 className="security__cardTitle">{title}</h2>
      <p className="security__strongText">
        <strong>{strongText}</strong>
      </p>
      <p className="security__text">{text}</p>
      {validation1 && (
        <ul className="security__lists">
          <li>{validation1}</li>
          <li>{validation2}</li>
        </ul>
      )}
    </div>
  );
};

export default SecurityCard;
