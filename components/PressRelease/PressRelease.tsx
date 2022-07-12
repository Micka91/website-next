/* eslint-disable @next/next/no-img-element */
// TRANSLATION
import { useTranslation } from "next-i18next";

const PressRelease = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <article className="pressRealease">
      <h2 className="pressRealease__title">{t("press:pressRelease.title")}</h2>
      <p className="pressRealease__paragraph">{t("press:pressRelease.p")}</p>

      <div className="pressRealease__card">
        <div className="pressRealease__logo">
          <img src="/images/press/APHP.jpg" alt="" />
        </div>
        <div className="pressRealease__container">
          <p className="pressRealease__date">{t("press:pressRelease.date")}</p>
          <p className="pressRealease__article">
            {t("press:pressRelease.article")}
          </p>
          <a
            href="/images/press/CP_APHP_Team_Doc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pressRealease__link"
          >
            {t("press:pressRelease.read")}
          </a>
        </div>
      </div>
    </article>
  );
};

export default PressRelease;
