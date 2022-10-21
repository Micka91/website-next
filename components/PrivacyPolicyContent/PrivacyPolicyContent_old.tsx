// NEXT
import Link from "next/link";
// TRANSLATION
import { useTranslation } from "next-i18next";
// UTILS
import { PATHS } from "../../enums/paths";

const PrivacyPolicyContent = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="privacy">
      <div>
        <p>{t("privacy:pres1")}</p>
        <p>{t("privacy:pres2")}</p>
        <p>{t("privacy:pres3")}</p>
      </div>

      <ol>
        {/* CHAPTER 1 */}
        <li>
          {t("privacy:chapter1.title")}
          <ul>
            <li>
              {t("privacy:chapter1.subtitle1")}
              <p>{t("privacy:chapter1.text1")}</p>
              <p>{t("privacy:chapter1.text2")}</p>
            </li>
            <li>
              {t("privacy:chapter1.subtitle2")}
              <p>{t("privacy:chapter1.text3")}</p>
              <p>{t("privacy:chapter1.text4")}</p>
            </li>
            <li>
              {t("privacy:chapter1.subtitle3")}
              <p>{t("privacy:chapter1.text5")}</p>
            </li>
            <li>
              {t("privacy:chapter1.subtitle4")}
              <p>{t("privacy:chapter1.text6")}</p>
              <p>
                <strong>{t("privacy:chapter1.text7")}</strong>
              </p>
              <p>{t("privacy:chapter1.text8")}</p>
              <p>{t("privacy:chapter1.text9")}</p>
              <p>
                {t("privacy:chapter1.text10")}
                <Link href={PATHS.COOKIES}>
                  {t("privacy:chapter1.cookiePolicyLink")}
                </Link>
              </p>
            </li>
          </ul>
        </li>
        {/* CHAPTER 2 */}
        <li>
          {t("privacy:chapter2.title")}
          <p>{t("privacy:chapter2.text1")}</p>
          <p>{t("privacy:chapter2.text2")}</p>
          <ul>
            <li>
              {t("privacy:chapter2.subtitle1")}
              <p>{t("privacy:chapter2.text3")}</p>
            </li>
            <li>
              {t("privacy:chapter2.subtitle2")}
              <p>{t("privacy:chapter2.text4")}</p>
            </li>
            <li>
              {t("privacy:chapter2.subtitle3")}
              <p>{t("privacy:chapter2.text5")}</p>
            </li>
          </ul>
        </li>
        {/* CHAPTER 3 */}
        <li>
          {t("privacy:chapter3.title")}
          <ul>
            <li>
              {t("privacy:chapter3.subtitle1")}
              <p>{t("privacy:chapter3.text1")}</p>
              <p>{t("privacy:chapter3.text2")}</p>
              <p>{t("privacy:chapter3.text3")}</p>
              <p>{t("privacy:chapter3.text4")}</p>
            </li>
            <li>
              {t("privacy:chapter3.subtitle2")}
              <p>{t("privacy:chapter3.text5")}</p>
            </li>
          </ul>
        </li>
        {/* CHAPTER 4 */}
        <li>
          {t("privacy:chapter4.title")}
          <p>{t("privacy:chapter4.text1")}</p>
          <p>{t("privacy:chapter4.text2")}</p>
        </li>
        {/* CHAPTER 5 */}
        <li>
          {t("privacy:chapter5.title")}
          <p>{t("privacy:chapter5.text1")}</p>
          <p>{t("privacy:chapter5.text2")}</p>
          <p>
            {t("privacy:chapter5.text3")}
            <a href="mailto:rgpd@teamdoc.fr">rgpd@teamdoc.fr</a>
          </p>
          <p>{t("privacy:chapter5.text4")}</p>
          <p>{t("privacy:chapter5.text5")}</p>
        </li>
        {/* CHAPTER 6 */}
        <li>
          {t("privacy:chapter6.title")}
          <p>{t("privacy:chapter6.text1")}</p>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicyContent;
