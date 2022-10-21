// TRANSLATION
// import { useTranslation } from "next-i18next";
import { teams } from "../../../translations/fr/teams";
// COMPONENTS
import Background from "../../Background/Background";

const HeaderTeams = () => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  return (
    <section className="ourTeams__header">
      <Background
        src="/images/headers/teams.png"
        alt="Image de fond cgv teamdoc"
        className="header__ourTeams"
      >
        <h1 className="ourTeams__title">{teams.title}</h1>
        <p className="ourTeams__paragraph">{teams.p}</p>
        {/* <h1 className="ourTeams__title">{t("teams:title")}</h1>
        <p className="ourTeams__paragraph">{t("teams:p")}</p> */}
      </Background>
    </section>
  );
};

export default HeaderTeams;
