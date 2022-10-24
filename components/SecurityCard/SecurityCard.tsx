// NEXT
import Image from "next/image";

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
      <Image src={image} alt={alt} width="300" height="185" />
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
