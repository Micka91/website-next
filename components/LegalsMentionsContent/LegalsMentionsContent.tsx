// NEXT
import Link from "next/link";
import Image from "next/image";
// TRANSLATION
import { legalsmentions } from "../../translations/fr/legalsmentions";
// ENUMS
import { PATHS } from "../../enums/paths";

const LegalsMentionsContent = () => {
  return (
    <section className="legalsMentions">
      {/* INFORMATIONS EDITORIALES */}
      <h2>
        {legalsmentions.title1}
        <a href="https://teamdoc.fr"> TEAMDOC.FR</a>
      </h2>
      <div>
        <h2>{legalsmentions.informations.title}</h2>
        <p>{legalsmentions.informations.pres}</p>
        <p>{/* <strong>{legalsmentions.informations.site}</strong> */}</p>
        <p>
          <strong>{legalsmentions.informations.adress}:</strong> 22 rue
          Drouot-75009 Paris-France
        </p>
        <p>
          <strong>{legalsmentions.informations.phone}</strong> 01 42 46 42 67
        </p>
        <p>
          <strong>{legalsmentions.informations.publication}</strong> Michel
          Rozencwajg -{" "}
          <a href="mailto:contact@teamdoc.fr">contact@teamdoc.fr</a>
        </p>
        <p>
          <strong>{legalsmentions.informations.webmaster}</strong> Mickael
          Christine - <a href="mailto:contact@teamdoc.fr">contact@teamdoc.fr</a>
        </p>
      </div>

      {/* PRESTATAIRE D'HEBERGEMENT */}
      <div>
        <h2>{legalsmentions.prestataire.title}</h2>
        <p>
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {legalsmentions.prestataire.texte1suite}
        </p>
        <h3>{legalsmentions.prestataire.hebergement}</h3>
        <a
          href="https://cegedim.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/logo/cegedimCLoud.svg"
            alt=""
            width="150"
            height="65"
          />
        </a>
        <p>CEGEDIM</p>
        <p>
          {`137 Rue d'Aguesseau, 92100 Boulogne-Billancourt`}
          <span> - France</span>
        </p>

        <p>{legalsmentions.prestataire.phone} +33 (0)1 49 09 33 47</p>
      </div>

      {/* NOUS CONTACTER */}
      <div>
        <h2>{legalsmentions.contact.title}</h2>
        <h3>{legalsmentions.contact.texte2}</h3>
        <ul>
          <li>
            {legalsmentions.contact.texte2li1}
            <a href="mailto:contact@teamdoc.fr">contact@teamdoc.fr</a>
          </li>
          <li>
            {legalsmentions.contact.texte2li2}
            <a href="mailto:contact@teamdoc.fr">support@teamdoc.fr</a>
          </li>
        </ul>
      </div>

      {/* CGU */}
      <div>
        <h2>{legalsmentions.cgu.title}</h2>
        <p className="legalsMentions__frame">{legalsmentions.cgu.pres}</p>
      </div>

      {/* OBJET */}
      <div>
        <h2>{legalsmentions.cgu.subTitle}</h2>
        <p>
          {legalsmentions.cgu.pres1}
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {legalsmentions.cgu.pres1bis}
        </p>
        <p>{legalsmentions.cgu.pres2}</p>
        <p>{legalsmentions.cgu.pres3}</p>
      </div>

      {/* ACCES AU SITE */}
      <div>
        <h2>{legalsmentions.cgu.subTitle1}</h2>
        <p>{legalsmentions.cgu.accessPres}</p>
      </div>

      {/* LIMITATIONS DE RESPONSABLITES */}
      <div>
        <h2>{legalsmentions.responsabilite.title}</h2>
        <p>{legalsmentions.responsabilite.texte1} </p>
        {/* <a href="https://teamdoc.fr">teamdoc.fr</a>{" "} */}
        <p>{legalsmentions.responsabilite.texte1suite}</p>
        <p>{legalsmentions.responsabilite.texte2} </p>
        {/* <a href="https://teamdoc.fr">teamdoc.fr</a> */}
      </div>

      {/* PERSONAL DATA */}
      <div>
        <h2>{legalsmentions.personalData.title}</h2>
        <p>
          {legalsmentions.personalData.texte1}{" "}
          <p>
            {legalsmentions.personalData.texte1suite}{" "}
            <Link href={PATHS.PRIVACY_POLICY}>
              {legalsmentions.personalData.link1}
            </Link>
            {legalsmentions.personalData.texte1bis}
            <Link href={PATHS.COOKIES}>
              {legalsmentions.personalData.link2}
            </Link>
            .
          </p>
        </p>
      </div>

      {/* PROPRIETE INTELLECTUELLE */}
      <div>
        <h2>{legalsmentions.copyright.title}</h2>
        <p>{legalsmentions.copyright.text1}</p>
        <p>{legalsmentions.copyright.text2}</p>
        <p>{legalsmentions.copyright.text3}</p>
        <p>{legalsmentions.copyright.text4}</p>
        <ul>
          <li>{legalsmentions.copyright.li1}</li>
          <li>{legalsmentions.copyright.li2}</li>
          <li>{legalsmentions.copyright.li3}</li>
          <li>{legalsmentions.copyright.li4}</li>
        </ul>
      </div>

      {/*RESPONSABILITE FACE AUX LIENS VERS D'AUTRES SITES   */}
      <div>
        <h2>{legalsmentions.responsabilityLink.title}</h2>
        <p>{legalsmentions.responsabilityLink.text1}</p>
        <p>{legalsmentions.responsabilityLink.text2}</p>
      </div>

      {/* DEMANDE DE CREATION DE LIENS VERS LE SITE  */}
      <div>
        {" "}
        <h2>
          {legalsmentions.createdLink.title}{" "}
          <a href="https://teamdoc.fr">TEAMDOC.FR</a>
        </h2>
        <p>{legalsmentions.createdLink.text1}</p>
        <ul>
          <li>{legalsmentions.createdLink.li1}</li>
          <li>{legalsmentions.createdLink.li2}</li>
        </ul>
        <p>{legalsmentions.createdLink.text2}</p>
      </div>
      {/* JURIDICTION */}
      <div>
        <h2>{legalsmentions.juridiction.title}</h2>
        <p>
          {legalsmentions.juridiction.texte1}{" "}
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {legalsmentions.juridiction.texte1suite}
        </p>
      </div>
      {/* SITE */}
      <div>
        <h2>{legalsmentions.site.title}</h2>
        <p>
          {legalsmentions.site.texte1}{" "}
          <a href="https://teamdoc.fr">teamdoc.fr</a>{" "}
          {legalsmentions.site.texte1suite}
        </p>
      </div>
    </section>
  );
};

export default LegalsMentionsContent;
