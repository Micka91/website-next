// TRANSLATION
import { useTranslation } from "next-i18next";
import Image from "next/image";
// COMPONENTS
import Container from "./../Container/Container";
// TEAM PICTURES
const apolline = "/images/teams/Apolline.jpg";
const dominique = "/images/teams/Dominique.jpg";
const eliran = "/images/teams/Eliran.jpg";
const yvan = "/images/teams/Ivan.jpg";
const kaiqiang = "/images/teams/Kaiqiang.jpg";
const kevin = "/images/teams/Kevin.jpg";
const ludovic = "/images/teams/ludoInd.png";
const michel = "/images/teams/Michel.jpg";
const mickael = "/images/teams/Micka.jpg";
const taha = "/images/teams/Taha.JPG";
// const thomas = "/images/teams/Thomas.jpg";
const tristan = "/images/teams/Tristan.jpg";

const jerome = "/images/teams/jerome.jpg";
const jeanmarc = "/images/teams/jeanmarc.jpeg";
const denis = "/images/teams/denis.jpeg";
const jeanyves = "/images/teams/jeanyves.jpeg";
const thibault = "/images/teams/thibault.jpeg";
// const audrey = "/images/teams/Tristan.jpg";
// const amine = "/images/teams/Tristan.jpg";

const pentagone = "/images/background/pentagone.png";
const linkedin = "/images/social/linkedin-gray.svg";

const Teams = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  const teamdocTeams = [
    // DIRECTION
    {
      src: michel,
      name: "Michel",
      status: t("teams:teams.michel"),
      linkedin: "https://www.linkedin.com/in/michel-rozencwajg-2156031b/",
    },
    {
      src: yvan,
      name: "Yvan",
      status: t("teams:teams.yvan"),
      linkedin: "https://www.linkedin.com/in/yvan-gabelica-256a562a/",
    },
    {
      src: ludovic,
      name: "Ludovic",
      status: t("teams:teams.ludovic"),
      linkedin: "https://www.linkedin.com/in/ludovic-vallee/",
    },
    {
      src: tristan,
      name: "Tristan",
      status: t("teams:teams.tristan"),
      linkedin: "https://www.linkedin.com/in/tristan-t-19b821155/",
    },
    // INVESTISSEURS
    // {
    //   src: jerome,
    //   name: "Jerome",
    //   status: t("teams:teams.jerome"),
    //   linkedin:
    //     "https://www.linkedin.com/in/j%C3%A9r%C3%B4me-raby-lemoine-02ba6611b/",
    // },
    {
      src: jeanmarc,
      name: "Jean Marc",
      status: t("teams:teams.jeanmarc"),
      linkedin: "https://www.linkedin.com/in/dr-jean-marc-coursier-b24aa263/",
    },
    {
      src: denis,
      name: "Denis",
      status: t("teams:teams.denis"),
      linkedin: "https://www.linkedin.com/in/denis-gihan-56b514/",
    },
    {
      src: jeanyves,
      name: "Jean Yves",
      status: t("teams:teams.jeanyves"),
      linkedin: "https://www.linkedin.com/in/jeanyvesrobin/",
    },
    // {
    //   src: thibault,
    //   name: "Thibault",
    //   status: t("teams:teams.thibault"),
    //   linkedin: "https://www.linkedin.com/in/thibault-maitre-8044524/",
    // },
    // DEVS
    // {
    //   src: thomas,
    //   name: "Thomas",
    //   status: t("teams:teams.thomas"),
    //   linkedin: "https://www.linkedin.com/in/thomas-martin-273b6430/",
    // },
    {
      src: eliran,
      name: "Eliran",
      status: t("teams:teams.eliran"),
      linkedin: "https://www.linkedin.com/in/eliran-elbaz-7294a0105/",
    },
    {
      src: mickael,
      name: "Mickaël",
      status: t("teams:teams.mickael"),
      linkedin: "https://www.linkedin.com/in/mi91/",
    },
    {
      src: kaiqiang,
      name: "Kaiqiang",
      status: t("teams:teams.kaiqiang"),
      linkedin: "https://www.linkedin.com/in/kaikrk/",
    },
    // SUPPORT AND MARKETING
    {
      src: apolline,
      name: "Apolline",
      status: t("teams:teams.apolline"),
      linkedin: "https://www.linkedin.com/in/apolline-chaudré-517b8a171/",
    },
    {
      src: dominique,
      name: "Dominique",
      status: t("teams:teams.dominique"),
      linkedin: "https://www.linkedin.com/in/dominique-vallee-23082919b/",
    },
    {
      src: kevin,
      name: "Kevin",
      status: t("teams:teams.kevin"),
      linkedin: "https://www.linkedin.com/in/kevin-mazure-217b93190/",
    },
    // COMMERCIAL
    {
      src: taha,
      name: "Taha",
      status: t("teams:teams.taha"),
      linkedin: "https://www.linkedin.com/in/taha-amsaguine-4354bb152/",
    },
  ];

  return (
    <div className="teams">
      <Container>
        <h2 className="teams__title">{t("teams:teams.title")}</h2>
        <div className="teams__grid">
          {teamdocTeams.map((user) => (
            <div key={user.name} className="teams__container">
              <a
                href={user.linkedin}
                className="teams__link"
                title={t("teams:linkTitle", { name: user.name })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="teams__imageContainer">
                  <Image
                    src={user.src}
                    alt={t("teams:alt", { name: user.name })}
                    className="teams__avatar"
                    width="250"
                    height="250"
                  />
                  <div className="teams__overlay"></div>
                  <div
                    style={{ backgroundImage: `url(${pentagone})` }}
                    className="teams__pentagone"
                  />
                  {/* <img
                    src={pentagone}
                    alt="Image décorative en forme de pentagone"
                    className="teams__pentagone"
                  /> */}
                </div>
              </a>
              <div className="teams__nameContainer">
                <h3 className="teams__name">{user.name}</h3>
                <a
                  href={user.linkedin}
                  className="teams__logo"
                  title={t("teams:linkTitle", { name: user.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedin}
                    alt="Logo linkedin"
                    width="25"
                    height="25"
                  />
                </a>
              </div>
              <p className="teams__status">{user.status}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Teams;
