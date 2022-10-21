// TRANSLATION
// import { useTranslation } from "next-i18next";
import { solution } from "../../translations/fr/solution";
// COMPONENTS
import Container from "../Container/Container";
import ExplanationCard from "../ExplanationCard/ExplanationCard";

const Explanations = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  const explanations = [
    {
      src: "/images/solutions/communication.png",
      data: {
        title: solution.explanations.card1.title,
        paragraph: solution.explanations.card1.text,
        subDatas: [
          {
            title: solution.explanations.card1.subtitle1,
            paragraph: solution.explanations.card1.subparagraph1,
          },
          {
            title: solution.explanations.card1.subtitle2,
            paragraph: solution.explanations.card1.subparagraph2,
          },
        ],
      },
      reverse: false,
    },
    {
      src: "/images/solutions/BoiteOutils.png",
      data: {
        title: solution.explanations.card2.title,
        paragraph: solution.explanations.card2.text,
        subDatas: [
          {
            title: solution.explanations.card2.subtitle1,
            paragraph: solution.explanations.card2.subparagraph1,
          },
          {
            title: solution.explanations.card2.subtitle2,
            paragraph: solution.explanations.card2.subparagraph2,
          },
        ],
      },
      reverse: true,
    },
    {
      src: "/images/solutions/transmission.png",
      data: {
        title: solution.explanations.card3.title,
        paragraph: solution.explanations.card3.text,
        subDatas: [
          {
            title: solution.explanations.card3.subtitle1,
            paragraph: solution.explanations.card3.subparagraph1,
          },
          {
            title: solution.explanations.card3.subtitle2,
            paragraph: solution.explanations.card3.subparagraph2,
          },
        ],
      },
      reverse: false,
    },
    {
      src: "/images/solutions/tasks.png",
      data: {
        title: solution.explanations.card4.title,
        paragraph: solution.explanations.card4.text,
        subDatas: [
          {
            title: solution.explanations.card4.subtitle1,
            paragraph: solution.explanations.card4.subparagraph1,
          },
          {
            title: solution.explanations.card4.subtitle2,
            paragraph: solution.explanations.card4.subparagraph2,
          },
        ],
      },
      reverse: true,
    },
  ];

  // const explanations = [
  //   {
  //     src: "/images/solutions/communication.png",
  //     data: {
  //       title: t("solution:explanations.card1.title"),
  //       paragraph: t("solution:explanations.card1.text"),
  //       subDatas: [
  //         {
  //           title: t("solution:explanations.card1.subtitle1"),
  //           paragraph: t("solution:explanations.card1.subparagraph1"),
  //         },
  //         {
  //           title: t("solution:explanations.card1.subtitle2"),
  //           paragraph: t("solution:explanations.card1.subparagraph2"),
  //         },
  //       ],
  //     },
  //     reverse: false,
  //   },
  //   {
  //     src: "/images/solutions/BoiteOutils.png",
  //     data: {
  //       title: t("solution:explanations.card2.title"),
  //       paragraph: t("solution:explanations.card2.text"),
  //       subDatas: [
  //         {
  //           title: t("solution:explanations.card2.subtitle1"),
  //           paragraph: t("solution:explanations.card2.subparagraph1"),
  //         },
  //         {
  //           title: t("solution:explanations.card2.subtitle2"),
  //           paragraph: t("solution:explanations.card2.subparagraph2"),
  //         },
  //       ],
  //     },
  //     reverse: true,
  //   },
  //   {
  //     src: "/images/solutions/transmission.png",
  //     data: {
  //       title: t("solution:explanations.card3.title"),
  //       paragraph: t("solution:explanations.card3.text"),
  //       subDatas: [
  //         {
  //           title: t("solution:explanations.card3.subtitle1"),
  //           paragraph: t("solution:explanations.card3.subparagraph1"),
  //         },
  //         {
  //           title: t("solution:explanations.card3.subtitle2"),
  //           paragraph: t("solution:explanations.card3.subparagraph2"),
  //         },
  //       ],
  //     },
  //     reverse: false,
  //   },
  //   {
  //     src: "/images/solutions/tasks.png",
  //     data: {
  //       title: t("solution:explanations.card4.title"),
  //       paragraph: t("solution:explanations.card4.text"),
  //       subDatas: [
  //         {
  //           title: t("solution:explanations.card4.subtitle1"),
  //           paragraph: t("solution:explanations.card4.subparagraph1"),
  //         },
  //         {
  //           title: t("solution:explanations.card4.subtitle2"),
  //           paragraph: t("solution:explanations.card4.subparagraph2"),
  //         },
  //       ],
  //     },
  //     reverse: true,
  //   },
  // ];

  return (
    <div className="explanation">
      <Container>
        {explanations.map((explanation) => (
          <ExplanationCard key={explanation.src} explanation={explanation} />
        ))}
      </Container>
    </div>
  );
};

export default Explanations;
