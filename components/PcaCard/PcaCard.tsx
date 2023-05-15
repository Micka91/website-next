// NEXT
import Image from "next/image";

interface IData {
  title: string;
  paragraph: string;
  list?: string[];
}

interface IProps {
  content: {
    src: string;
    data: IData;
    reverse: boolean;
  };
}

const PcaCard = ({ content }: IProps) => {
  const { src, data, reverse } = content;
  const { title, paragraph, list } = data;

  const classes = reverse ? "pcaCards__reverse" : "pcaCards__row";

  return (
    <div className="pcaCards__card">
      <div className={classes}>
        <div className="pcaCards__imageContainer">
          <Image src={src} alt="" width="425" height="280" />
        </div>
        <div className="pcaCards__container">
          <h2 className="pcaCards__title">{title}</h2>
          <p className="pcaCards__paragraph">{paragraph}</p>
          {list ? (
            <ul className="pcaCards__list">
              {list.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PcaCard;
