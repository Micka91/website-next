// REACT
import Image from "next/image";
import { useState } from "react";
// COMPONENTS
import { ISupport } from "./../SupportContent/SupportContent";

interface IPdf {
  pdf: ISupport;
}

const SupportPdfCard = ({ pdf }: IPdf) => {
  const [linkIsHovered, setLinkIsHovered] = useState<boolean>(false);
  const { link, title } = pdf;
  return (
    <a
      href={link}
      className="support__pdfLink"
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => setLinkIsHovered(true)}
      onMouseLeave={() => setLinkIsHovered(false)}
    >
      <h2>{title}</h2>
      <div className="support__pdfLogo">
        <Image
          src={
            linkIsHovered
              ? "/images/icones/download-blue.svg"
              : "/images/icones/download.svg"
          }
          alt="patern géométrique"
          width="24"
          height="24"
        />
      </div>
    </a>
  );
};

export default SupportPdfCard;
