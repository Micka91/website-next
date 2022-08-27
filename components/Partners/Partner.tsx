// NEXT
import Image from "next/image";

interface IData {
  src: string;
  alt: string;
}

interface IProps {
  datas: {
    title: string;
    partners: IData[];
  };
}

const Partner = ({ datas }: IProps) => {
  const { title, partners } = datas;
  return (
    <div className="partner">
      <h3 className="partner__title">{title}</h3>
      <div className="partner__container">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            alt={partner.alt}
            // layout="responsive"
            width={105}
            height={60}
            loading="eager"
            className="partner__logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
