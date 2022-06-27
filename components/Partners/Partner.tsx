import React from "react";

interface IProps {
  datas: {
    title: string;
    partners: string[];
  };
}

const Partner = ({ datas }: IProps) => {
  const { title, partners } = datas;
  return (
    <div className="partner">
      <h3 className="partner__title">{title}</h3>
      <div className="partner__container">
        {partners.map((partner, index) => (
          <img key={index} src={partner} alt="" className="partner__logo" />
        ))}
      </div>
    </div>
  );
};

export default Partner;
