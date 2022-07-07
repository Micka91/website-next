// NEXT
import Link from "next/link";
// TRANSLATION
import { useTranslation } from "next-i18next";
// UTILS
import { PATHS } from "../../enums/paths";

const CookiesContent = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="cookies">
      <div>
        <p>
          {t("cookies:text1start")}
          <strong>{t("cookies:text1strong1")}</strong>
          {t("cookies:text1InnerStrong")}
          <strong>{t("cookies:text1strong2")}</strong>
          {t("cookies:text1end")}
        </p>
        <p>
          {t("cookies:text2start")}
          <strong>{t("cookies:texte2strong1")}</strong>
          {t("cookies:text2inner")}
          <a
            href="https://teamdoc.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            teamdoc.fr
          </a>
          {t("cookies:text2innernext")}
          <strong>{t("cookies:text2strong2")}</strong> »)
        </p>
        <p>{t("cookies:text3")}</p>
      </div>
      <div>
        {/* PARAGRAPHE 1 */}
        <h2>{t("cookies:watiscookie.title")}</h2>

        <p>{t("cookies:watiscookie.text")}</p>
      </div>
      <div>
        {/* PARAGRAPHE 2 */}
        <h2>{t("cookies:whycookie.title")}</h2>

        <p>{t("cookies:whycookie.text1")}</p>
        <p>{t("cookies:whycookie.text2")}</p>
        <p>{t("cookies:whycookie.text3")}</p>
        <p>{t("cookies:whycookie.text4")}</p>
      </div>
      <div>
        {/* PARAGRAPHE 3 */}
        <h2>{t("cookies:typeofcookie.title")}</h2>

        <p>{t("cookies:typeofcookie.text1")}</p>

        <p>
          <strong>{t("cookies:typeofcookie.text2")}</strong>
        </p>

        <p>{t("cookies:typeofcookie.text3")}</p>
        <p>{t("cookies:typeofcookie.text4")}</p>
        <p>{t("cookies:typeofcookie.text5")}</p>
        <p>{t("cookies:typeofcookie.text6")}</p>
        <p>{t("cookies:typeofcookie.text7")}</p>
        <p>
          {t("cookies:typeofcookie.text8")}
          <Link href={PATHS.PRIVACY_POLICY}>
            {t("cookies:typeofcookie.privacyPolicyLink")}
          </Link>
          {t("cookies:typeofcookie.text9")}
        </p>
        <h3>{t("cookies:typeofcookie.indispensables.title")}</h3>

        <p>{t("cookies:typeofcookie.indispensables.text1")}</p>
        <p>{t("cookies:typeofcookie.indispensables.text2")}</p>
        <p>{t("cookies:typeofcookie.indispensables.text3")}</p>
        <h3>{t("cookies:typeofcookie.analyse.title")}</h3>

        <p>{t("cookies:typeofcookie.analyse.text")}</p>
        <h3>{t("cookies:typeofcookie.thirdparty.title")}</h3>

        <p>{t("cookies:typeofcookie.thirdparty.text1")}</p>
        <p>{t("cookies:typeofcookie.thirdparty.text2")}</p>
      </div>
      <div className="cookies__table">
        <table>
          <thead>
            <tr>
              <td>{t("cookies:typeofcookie.table.theadtd1")}</td>
              <td>{t("cookies:typeofcookie.table.theadtd2")}</td>
              <td>{t("cookies:typeofcookie.table.theadtd3")}</td>
              <td>{t("cookies:typeofcookie.table.theadtd4")}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("cookies:typeofcookie.table.tbody.tr1td1")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr1td2")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr1td3")}</td>
              <td className="cookies__time">
                {t("cookies:typeofcookie.table.tbody.tr1td4")}
              </td>
            </tr>
            <tr>
              <td>{t("cookies:typeofcookie.table.tbody.tr2td1")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr2td2")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr2td3")}</td>
              <td className="cookies__time">
                {t("cookies:typeofcookie.table.tbody.tr2td4")}
              </td>
            </tr>
            <tr>
              <td>{t("cookies:typeofcookie.table.tbody.tr3td1")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr3td2")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr3td3")}</td>
              <td className="cookies__time">
                {t("cookies:typeofcookie.table.tbody.tr3td4")}
              </td>
            </tr>
            <tr>
              <td>{t("cookies:typeofcookie.table.tbody.tr4td1")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr4td2")}</td>
              <td>{t("cookies:typeofcookie.table.tbody.tr4td3")}</td>
              <td className="cookies__time">
                {t("cookies:typeofcookie.table.tbody.tr4td4")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* PARAGRAPHE 4 */}
        <h2>{t("cookies:timeofcookie.title")}</h2>

        <p>{t("cookies:timeofcookie.text")}</p>
      </div>
      <div>
        {/* PARAGRAPHE 5 */}
        <h2>{t("cookies:controlofcookie.title")}</h2>

        <p>{t("cookies:controlofcookie.text1")}</p>
        <p>{t("cookies:controlofcookie.text2")}</p>
      </div>
      <div>
        {/* PARAGRAPHE 6 */}
        <h2>{t("cookies:contactus.title")}</h2>

        <p>
          {t("cookies:contactus.text1")}
          <a href="mailto:cookies@teamdoc.fr">cookies@teamdoc.fr</a>
        </p>
        <p>{t("cookies:contactus.text2")}</p>
      </div>
      <div id="insertParamCs"></div>
    </section>
  );
};

export default CookiesContent;
