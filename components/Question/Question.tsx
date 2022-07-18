import Image from "next/image";

interface IProps {
  question: {
    id: number;
    title: string;
    paragraph: string;
    paragraph2?: string;
    paragraph3?: string;
    link?: string;
    linkText?: string;
    email?: string;
  };
  current: number;
  handleClick: (id: number) => void;
}

const Question = ({ question, current, handleClick }: IProps) => {
  const questionClass =
    current === question.id ? `question question__open` : "question";

  const questionTitleClass =
    current === question.id
      ? `question__title question__titleOpen`
      : "question__title question__titleClose";

  const questionTextClass =
    current === question.id ? `question__textOpen` : "question__textClose";

  return (
    <div
      key={question.id}
      onClick={() => handleClick(question.id)}
      className={questionClass}
    >
      <div className="question__titleContainer">
        <h3 className={questionTitleClass}>{question.title}</h3>
        <Image
          src={
            current === question.id
              ? "/images/offers/faq-dash.svg"
              : "/images/offers/faq-plus.svg"
          }
          alt=""
          width={24}
          height={24}
          className="question__icon"
        />
      </div>
      <div className={questionTextClass}>
        <p>{question.paragraph}</p>
        <p>{question.paragraph2}</p>
        <p>{question.paragraph3}</p>
        <p>
          <a href={question.link} title={question.linkText}>
            {question.linkText}
          </a>
        </p>
        {question?.email && (
          <p>
            <a href={`mailto:${question.email}`}>{question.email}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Question;
