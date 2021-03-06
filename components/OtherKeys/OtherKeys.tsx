// TRANSLATION
import { useTranslation } from "next-i18next";

const OtherKeys = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  const datas = [
    {
      title: t("solution:otherKeys.title1"),
      text: t("solution:otherKeys.p1"),
    },
    {
      title: t("solution:otherKeys.title2"),
      text: t("solution:otherKeys.p2"),
    },
    {
      title: t("solution:otherKeys.title3"),
      text: t("solution:otherKeys.p3"),
    },
  ];

  return (
    <div className="otherTools__otherKeys">
      <h2 className="otherTools__otherKeysTitle">
        {t("solution:otherKeys.mainTitle")}
      </h2>
      <div className="otherTools__otherKeysContainer">
        <div className="otherTools__otherKeysCardContainer">
          {datas.map((data) => (
            <div key={data.title}>
              <img src="/images/icones/checkWithSquare.svg" alt="" />
              <div className="otherTools__otherKeysCard">
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherKeys;
