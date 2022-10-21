// NEXT
import Link from "next/link";
// TRANSLATION
import { cookies } from "../../translations/fr/cookies";
// UTILS
import { PATHS } from "../../enums/paths";

const CookiesContent = () => {
  return (
    <section className="cookies">
      <div>
        <p>
          {cookies.text1start}
          <strong>{cookies.text1strong1}</strong>
          {cookies.text1InnerStrong}
          <strong>{cookies.text1strong2}</strong>
          {cookies.text1end}
        </p>
        <p>
          {cookies.text2start}
          <strong>{cookies.texte2strong1}</strong>
          {cookies.text2inner}
          <a
            href="https://teamdoc.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            teamdoc.fr
          </a>
          {cookies.text2innernext}
          <strong>{cookies.text2strong2}</strong> »)
        </p>
        <p>{cookies.text3}</p>
      </div>
      <div>
        {/* PARAGRAPHE 1 */}
        <h2>{cookies.watiscookie.title}</h2>

        <p>{cookies.watiscookie.text}</p>
      </div>
      <div>
        {/* PARAGRAPHE 2 */}
        <h2>{cookies.whycookie.title}</h2>

        <p>{cookies.whycookie.text1}</p>
        <p>{cookies.whycookie.text2}</p>
        <p>{cookies.whycookie.text3}</p>
        <p>{cookies.whycookie.text4}</p>
      </div>
      <div>
        {/* PARAGRAPHE 3 */}
        <h2>{cookies.typeofcookie.title}</h2>

        <p>{cookies.typeofcookie.text1}</p>

        <p>
          <strong>{cookies.typeofcookie.text2}</strong>
        </p>

        <p>{cookies.typeofcookie.text3}</p>
        <p>{cookies.typeofcookie.text4}</p>
        <p>{cookies.typeofcookie.text5}</p>
        <p>{cookies.typeofcookie.text6}</p>
        <p>{cookies.typeofcookie.text7}</p>
        <p>
          {cookies.typeofcookie.text8}
          <Link href={PATHS.PRIVACY_POLICY}>
            {cookies.typeofcookie.privacyPolicyLink}
          </Link>
          {cookies.typeofcookie.text9}
        </p>
        <h3>{cookies.typeofcookie.indispensables.title}</h3>

        <p>{cookies.typeofcookie.indispensables.text1}</p>
        <p>{cookies.typeofcookie.indispensables.text2}</p>
        <p>{cookies.typeofcookie.indispensables.text3}</p>
        <h3>{cookies.typeofcookie.analyse.title}</h3>

        <p>{cookies.typeofcookie.analyse.text}</p>
        <h3>{cookies.typeofcookie.thirdparty.title}</h3>

        <p>{cookies.typeofcookie.thirdparty.text1}</p>
        <p>{cookies.typeofcookie.thirdparty.text2}</p>
      </div>
      <div className="cookies__table">
        <table>
          <thead>
            <tr>
              <td>{cookies.typeofcookie.table.theadtd1}</td>
              <td>{cookies.typeofcookie.table.theadtd2}</td>
              <td>{cookies.typeofcookie.table.theadtd3}</td>
              <td>{cookies.typeofcookie.table.theadtd4}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cookies.typeofcookie.table.tbody.tr1td1}</td>
              <td>{cookies.typeofcookie.table.tbody.tr1td2}</td>
              <td>{cookies.typeofcookie.table.tbody.tr1td3}</td>
              <td className="cookies__time">
                {cookies.typeofcookie.table.tbody.tr1td4}
              </td>
            </tr>
            <tr>
              <td>{cookies.typeofcookie.table.tbody.tr2td1}</td>
              <td>{cookies.typeofcookie.table.tbody.tr2td2}</td>
              <td>{cookies.typeofcookie.table.tbody.tr2td3}</td>
              <td className="cookies__time">
                {cookies.typeofcookie.table.tbody.tr2td4}
              </td>
            </tr>
            <tr>
              <td>{cookies.typeofcookie.table.tbody.tr3td1}</td>
              <td>{cookies.typeofcookie.table.tbody.tr3td2}</td>
              <td>{cookies.typeofcookie.table.tbody.tr3td3}</td>
              <td className="cookies__time">
                {cookies.typeofcookie.table.tbody.tr3td4}
              </td>
            </tr>
            <tr>
              <td>{cookies.typeofcookie.table.tbody.tr4td1}</td>
              <td>{cookies.typeofcookie.table.tbody.tr4td2}</td>
              <td>{cookies.typeofcookie.table.tbody.tr4td3}</td>
              <td className="cookies__time">
                {cookies.typeofcookie.table.tbody.tr4td4}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* PARAGRAPHE 4 */}
        <h2>{cookies.timeofcookie.title}</h2>

        <p>{cookies.timeofcookie.text}</p>
      </div>
      <div>
        {/* PARAGRAPHE 5 */}
        <h2>{cookies.controlofcookie.title}</h2>

        <p>{cookies.controlofcookie.text1}</p>
        <p>{cookies.controlofcookie.text2}</p>
      </div>
      <div>
        {/* PARAGRAPHE 6 */}
        <h2>{cookies.contactus.title}</h2>

        <p>
          {cookies.contactus.text1}
          <a href="mailto:cookies@teamdoc.fr">cookies@teamdoc.fr</a>
        </p>
        <p>{cookies.contactus.text2}</p>
      </div>
      <div id="insertParamCs"></div>
    </section>
  );
};

export default CookiesContent;
