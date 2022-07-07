/* eslint-disable @next/next/no-img-element */

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
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="partner__logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
