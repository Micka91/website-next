// TRANSLATION
// import { useTranslation } from "next-i18next";
import { joinUs } from "../../translations/fr/joinUs";
// COMPONENTS
import Container from "./../Container/Container";

const JoinUsCard = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <div className="joinUsCard">
      <Container>
        <div className="joinUsCard__container">
          <p>
            {joinUs.text1} <br />
            {joinUs.text2}
            <br />
            {joinUs.text3}
          </p>
          <p>
            {joinUs.text4} <br />
            {joinUs.text5}
          </p>
          <p>
            {joinUs.text6} <a href="mailto: rgpd@teamdoc.fr">rgpd@teamdoc.fr</a>
          </p>
          <p>{joinUs.text7}</p>
          <p>
            {joinUs.text8} <a href="mailto: jobs@teamdoc.fr">jobs@teamdoc.fr</a>
          </p>
          {/* <p>
            {t("joinUs:text1")} <br />
            {t("joinUs:text2")}
            <br />
            {t("joinUs:text3")}
          </p>
          <p>
            {t("joinUs:text4")} <br />
            {t("joinUs:text5")}
          </p>
          <p>
            {t("joinUs:text6")}{" "}
            <a href="mailto: rgpd@teamdoc.fr">rgpd@teamdoc.fr</a>
          </p>
          <p>{t("joinUs:text7")}</p>
          <p>
            {t("joinUs:text8")}{" "}
            <a href="mailto: jobs@teamdoc.fr">jobs@teamdoc.fr</a>
          </p> */}
        </div>
      </Container>
    </div>
  );
};

export default JoinUsCard;
