// NEXT
import Image from "next/image";

interface IProps {
  image: string;
  title: string;
  text: string;
}

const PcaFunctionnalityCard = ({ image, title, text }: IProps) => {
  return (
    <div
      className="pcaFunctionnalityCard"
      role="article"
      aria-labelledby="pcaFunctionalityTitle"
    >
      <Image src={image} alt="" width="425" height="380" />
      <div className="pcaFunctionnalityCard__content">
        <h2>{title}</h2>
        <p role="textbox">{text}</p>
      </div>
    </div>
  );
};

export default PcaFunctionnalityCard;
