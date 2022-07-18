// REACT
import { useState } from "react";
// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Container from "./../Container/Container";
import Question from "./../Question/Question";

const FaQ = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();
  // REACT STATE
  const [current, setCurrent] = useState(0);

  const handleClick = (id: number) => {
    if (current === id) setCurrent(0);
    else setCurrent(id);
  };

  // FAQ
  const questions = [
    {
      id: 2,
      title: t("faq:questions.two.title"),
      paragraph: t("faq:questions.two.paragraph"),
      paragraph2: t("faq:questions.two.paragraph2"),
      link: "https://www.teamdoc.fr/securite",
      linkText: t("faq:questions.two.link"),
    },
  ];

  const questions2 = [
    {
      id: 4,
      title: t("faq:questions.three.title"),
      paragraph: t("faq:questions.three.paragraph"),
      paragraph2: t("faq:questions.three.paragraph2"),
      link: "mailto:support@teamdoc.fr",
      linkText: t("faq:questions.three.support_link"),
    },
    {
      id: 3,
      title: t("faq:questions.one.title"),
      paragraph: t("faq:questions.one.paragraph"),
      email: "commercial@teamdoc.fr",
    },
  ];

  return (
    <Container>
      <div className="faq">
        <h2 className="faq__title">{t("faq:title")}</h2>
        <div className="faq__questions">
          <div className="faq__questionContainer">
            {questions.map((question) => (
              <Question
                key={question.id}
                question={question}
                current={current}
                handleClick={handleClick}
              />
            ))}
          </div>
          <div className="faq__questionContainer">
            {questions2.map((question) => (
              <Question
                key={question.id}
                question={question}
                current={current}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FaQ;
