// NEXT
import Link from "next/link";
// TRANSLATION
import { useTranslation } from "next-i18next";
import { PATHS } from "../../enums/paths";

const LegalsMentionsContent = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  return (
    <section className="legalsMentions">
      {/* INFORMATIONS EDITORIALES */}
      <h2>
        {t("legalsmentions:title1")}
        <a href="https://teamdoc.fr"> TEAMDOC.FR</a>
      </h2>
      <div>
        <h2>{t("legalsmentions:informations.title")}</h2>
        <p>{t("legalsmentions:informations.pres")}</p>
        <p>{/* <strong>{t("legalsmentions:informations.site")}</strong> */}</p>
        <p>
          <strong>{t("legalsmentions:informations.adress")}:</strong> 22 rue
          Drouot-75009 Paris-France
        </p>
        <p>
          <strong>{t("legalsmentions:informations.phone")}</strong> 01 42 46 42
          67
        </p>
        <p>
          <strong>{t("legalsmentions:informations.publication")}</strong> Michel
          Rozencwajg -{" "}
          <a href="mailto:contact@teamdoc.fr">contact@teamdoc.fr</a>
        </p>
        <p>
          <strong>{t("legalsmentions:informations.webmaster")}</strong> Mickael
          Christine - <a href="mailto:contact@teamdoc.fr">contact@teamdoc.fr</a>
        </p>
      </div>

      {/* PRESTATAIRE D'HEBERGEMENT */}
      <div>
        <h2>{t("legalsmentions:prestataire.title")}</h2>
        <p>
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {t("legalsmentions:prestataire.texte1suite")}
        </p>
        <h3>{t("legalsmentions:prestataire.hebergement")}</h3>
        <p>CEGEDIM</p>
        <p>
          {`137 Rue d'Aguesseau, 92100 Boulogne-Billancourt`}
          <span> - France</span>
        </p>

        <p>{t("legalsmentions:prestataire.phone")} +33 (0)1 49 09 33 47</p>
      </div>

      {/* NOUS CONTACTER */}
      <div>
        <h2>{t("legalsmentions:contact.title")}</h2>
        <h3>{t("legalsmentions:contact.texte2")}</h3>
        <ul>
          <li>
            {t("legalsmentions:contact.texte2li1")}
            <a href="mailto:contact@teamdoc.fr">contact@teamdoc.fr</a>
          </li>
          <li>
            {t("legalsmentions:contact.texte2li2")}
            <a href="mailto:contact@teamdoc.fr">support@teamdoc.fr</a>
          </li>
        </ul>
      </div>

      {/* CGU */}
      <div>
        <h2>{t("legalsmentions:cgu.title")}</h2>
        <p className="legalsMentions__frame">{t("legalsmentions:cgu.pres")}</p>
      </div>

      {/* OBJET */}
      <div>
        <h2>{t("legalsmentions:cgu.subTitle")}</h2>
        <p>
          {t("legalsmentions:cgu.pres1")}
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {t("legalsmentions:cgu.pres1bis")}
        </p>
        <p>{t("legalsmentions:cgu.pres2")}</p>
        <p>{t("legalsmentions:cgu.pres3")}</p>
      </div>

      {/* ACCES AU SITE */}
      <div>
        <h2>{t("legalsmentions:cgu.subTitle1")}</h2>
        <p>{t("legalsmentions:cgu.accessPres")}</p>
      </div>

      {/* LIMITATIONS DE RESPONSABLITES */}
      <div>
        <h2>{t("legalsmentions:responsabilite.title")}</h2>
        <p>{t("legalsmentions:responsabilite.texte1")} </p>
        {/* <a href="https://teamdoc.fr">teamdoc.fr</a>{" "} */}
        <p>{t("legalsmentions:responsabilite.texte1suite")}</p>
        <p>{t("legalsmentions:responsabilite.texte2")} </p>
        {/* <a href="https://teamdoc.fr">teamdoc.fr</a> */}
      </div>

      {/* PERSONAL DATA */}
      <div>
        <h2>{t("legalsmentions:personalData.title")}</h2>
        <p>
          {t("legalsmentions:personalData.texte1")}{" "}
          <p>
            {t("legalsmentions:personalData.texte1suite")}{" "}
            <Link href={PATHS.PRIVACY_POLICY}>
              {t("legalsmentions:personalData.link1")}
            </Link>
            {t("legalsmentions:personalData.texte1bis")}
            <Link href={PATHS.COOKIES}>
              {t("legalsmentions:personalData.link2")}
            </Link>
            .
          </p>
        </p>
      </div>

      {/* PROPRIETE INTELLECTUELLE */}
      <div>
        <h2>{t("legalsmentions:copyright.title")}</h2>
        <p>{t("legalsmentions:copyright.text1")}</p>
        <p>{t("legalsmentions:copyright.text2")}</p>
        <p>{t("legalsmentions:copyright.text3")}</p>
        <p>{t("legalsmentions:copyright.text4")}</p>
        <ul>
          <li>{t("legalsmentions:copyright.li1")}</li>
          <li>{t("legalsmentions:copyright.li2")}</li>
          <li>{t("legalsmentions:copyright.li3")}</li>
          <li>{t("legalsmentions:copyright.li4")}</li>
        </ul>
      </div>

      {/*RESPONSABILITE FACE AUX LIENS VERS D'AUTRES SITES   */}
      <div>
        <h2>{t("legalsmentions:responsabilityLink.title")}</h2>
        <p>{t("legalsmentions:responsabilityLink.text1")}</p>
        <p>{t("legalsmentions:responsabilityLink.text2")}</p>
      </div>

      {/* DEMANDE DE CREATION DE LIENS VERS LE SITE  */}
      <div>
        {" "}
        <h2>
          {t("legalsmentions:createdLink.title")}{" "}
          <a href="https://teamdoc.fr">TEAMDOC.FR</a>
        </h2>
        <p>{t("legalsmentions:createdLink.text1")}</p>
        <ul>
          <li>{t("legalsmentions:createdLink.li1")}</li>
          <li>{t("legalsmentions:createdLink.li2")}</li>
        </ul>
        <p>{t("legalsmentions:createdLink.text2")}</p>
      </div>
      {/* JURIDICTION */}
      <div>
        <h2>{t("legalsmentions:juridiction.title")}</h2>
        <p>
          {t("legalsmentions:juridiction.texte1")}{" "}
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {t("legalsmentions:juridiction.texte1suite")}
        </p>
      </div>
      {/* SITE */}
      <div>
        <h2>{t("legalsmentions:site.title")}</h2>
        <p>
          {t("legalsmentions:site.texte1")}{" "}
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {t("legalsmentions:site.texte1suite")}
        </p>
      </div>
    </section>
  );
};

export default LegalsMentionsContent;
