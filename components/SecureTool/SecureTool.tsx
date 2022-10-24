// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { solution } from "../../translations/fr/solution";

const SecureTool = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <div className="otherTools__secureTool">
      <h2 className="otherTools__secureToolTitle">
        {solution.secureTool.mainTitle}
        {/* {t("solution:secureTool.mainTitle")} */}
      </h2>
      <div className="otherTools__secureToolContainer">
        <div className="otherTools__secureToolImage">
          <Image
            src="/images/solutions/pin.png"
            alt="visuel_écran"
            width="480"
            height="280"
            objectFit="contain"
          />
        </div>
        <div className="otherTools__secureToolContent">
          <h3>{solution.secureTool.title1}</h3>
          <p>{solution.secureTool.p1}</p>
          <h3>{solution.secureTool.title2}</h3>
          <p>{solution.secureTool.p2}</p>
          {/* <h3>{t("solution:secureTool.title1")}</h3>
          <p>{t("solution:secureTool.p1")}</p>
          <h3>{t("solution:secureTool.title2")}</h3>
          <p>{t("solution:secureTool.p2")}</p> */}
        </div>
      </div>
    </div>
  );
};

export default SecureTool;
