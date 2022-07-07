import { ISupport } from "./../SupportContent/SupportContent";

interface IPdf {
  pdf: ISupport;
}

const SupportPdfCard = ({ pdf }: IPdf) => {
  const { link, title } = pdf;
  return (
    <a
      href={link}
      className="support__pdfLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{title}</h2>
      <div className="support__pdfLogo"></div>
    </a>
  );
};

export default SupportPdfCard;
