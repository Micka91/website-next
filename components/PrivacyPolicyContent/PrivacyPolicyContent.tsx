// NEXT
import Link from "next/link";
// TRANSLATION
import { privacy } from "../../translations/fr/privacy";
// UTILS
import { PATHS } from "../../enums/paths";

const PrivacyPolicyContent = () => {
  return (
    <section className="privacy">
      <div>
        <p>{privacy.pres1}</p>
        <p>{privacy.pres2}</p>
        <p>{privacy.pres3}</p>
      </div>

      <ol>
        {/* CHAPTER 1 */}
        <li>
          {privacy.chapter1.title}
          <ul>
            <li>
              {privacy.chapter1.subtitle1}
              <p>{privacy.chapter1.text1}</p>
              <p>{privacy.chapter1.text2}</p>
            </li>
            <li>
              {privacy.chapter1.subtitle2}
              <p>{privacy.chapter1.text3}</p>
              <p>{privacy.chapter1.text4}</p>
            </li>
            <li>
              {privacy.chapter1.subtitle3}
              <p>{privacy.chapter1.text5}</p>
            </li>
            <li>
              {privacy.chapter1.subtitle4}
              <p>{privacy.chapter1.text6}</p>
              <p>
                <strong>{privacy.chapter1.text7}</strong>
              </p>
              <p>{privacy.chapter1.text8}</p>
              <p>{privacy.chapter1.text9}</p>
              <p>
                {privacy.chapter1.text10}
                <Link href={PATHS.COOKIES}>
                  {privacy.chapter1.cookiePolicyLink}
                </Link>
              </p>
            </li>
          </ul>
        </li>
        {/* CHAPTER 2 */}
        <li>
          {privacy.chapter2.title}
          <p>{privacy.chapter2.text1}</p>
          <p>{privacy.chapter2.text2}</p>
          <ul>
            <li>
              {privacy.chapter2.subtitle1}
              <p>{privacy.chapter2.text3}</p>
            </li>
            <li>
              {privacy.chapter2.subtitle2}
              <p>{privacy.chapter2.text4}</p>
            </li>
            <li>
              {privacy.chapter2.subtitle3}
              <p>{privacy.chapter2.text5}</p>
            </li>
          </ul>
        </li>
        {/* CHAPTER 3 */}
        <li>
          {privacy.chapter3.title}
          <ul>
            <li>
              {privacy.chapter3.subtitle1}
              <p>{privacy.chapter3.text1}</p>
              <p>{privacy.chapter3.text2}</p>
              <p>{privacy.chapter3.text3}</p>
              <p>{privacy.chapter3.text4}</p>
            </li>
            <li>
              {privacy.chapter3.subtitle2}
              <p>{privacy.chapter3.text5}</p>
            </li>
          </ul>
        </li>
        {/* CHAPTER 4 */}
        <li>
          {privacy.chapter4.title}
          <p>{privacy.chapter4.text1}</p>
          <p>{privacy.chapter4.text2}</p>
        </li>
        {/* CHAPTER 5 */}
        <li>
          {privacy.chapter5.title}
          <p>{privacy.chapter5.text1}</p>
          <p>{privacy.chapter5.text2}</p>
          <p>
            {privacy.chapter5.text3}
            <a href="mailto:rgpd@teamdoc.fr">rgpd@teamdoc.fr</a>
          </p>
          <p>{privacy.chapter5.text4}</p>
          <p>{privacy.chapter5.text5}</p>
        </li>
        {/* CHAPTER 6 */}
        <li>
          {privacy.chapter6.title}
          <p>{privacy.chapter6.text1}</p>
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicyContent;
