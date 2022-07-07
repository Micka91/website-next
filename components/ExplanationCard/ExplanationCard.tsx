/* eslint-disable @next/next/no-img-element */

interface IData {
  title: string;
  paragraph: string;
}

interface IDatas {
  title: string;
  paragraph: string;
  subDatas: IData[];
}

interface IProps {
  explanation: {
    src: string;
    data: IDatas;
    reverse: boolean;
  };
}

const ExplanationCard = ({ explanation }: IProps) => {
  const { src, data, reverse } = explanation;
  const { title, paragraph, subDatas } = data;

  const classes = reverse ? "explanation__reverse" : "explanation__row";

  return (
    <div className="explanation__card">
      <div className={classes}>
        <div className="explanation__imageContainer">
          <img src={src} alt="" />
        </div>
        <div className="explanation__container">
          <h2 className="explanation__title">{title}</h2>
          <p className="explanation__paragraph">{paragraph}</p>
          <div className="explanation__subContainer">
            {subDatas.map((datas) => (
              <>
                <div className="explanation__subTitleContainer">
                  <img src="/images/icones/check.svg" alt="" />
                  <h3 className="explanation__subTitle">{datas.title}</h3>
                </div>
                <p className="explanation__subParagraph">{datas.paragraph}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationCard;
