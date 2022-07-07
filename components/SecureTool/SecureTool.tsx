// TRANSLATION
import { useTranslation } from "next-i18next";

const SecureTool = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <div className="otherTools__secureTool">
      <h2 className="otherTools__secureToolTitle">
        {t("solution:secureTool.mainTitle")}
      </h2>
      <div className="otherTools__secureToolContainer">
        <div className="otherTools__secureToolImage">
          <img src="/images/solutions/pin.png" alt="visuel_écran" />
        </div>
        <div className="otherTools__secureToolContent">
          <h3>{t("solution:secureTool.title1")}</h3>
          <p>{t("solution:secureTool.p1")}</p>
          <h3>{t("solution:secureTool.title2")}</h3>
          <p>{t("solution:secureTool.p2")}</p>
        </div>
      </div>
    </div>
  );
};

export default SecureTool;
