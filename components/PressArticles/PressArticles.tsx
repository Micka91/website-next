// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import Article from "./../Article/Article";
import Container from "./../Container/Container";

const express = "images/press/articles/Express.svg";
const maddy = "images/press/articles/Maddynesslogo.svg";
const ticSante = "./images/press/articles/logo_tic_sante.jpg";
const wudoc = "./images/press/articles/logo-wudoc.png";
const hos = "./images/press/articles/hospitalia.png";
const ht = "./images/press/articles/650.logo_large.png";
const mfss = "./images/press/articles/mffs.png";
const majors = "./images/press/articles/Majors.jpg";
const sih = "./images/press/articles/sih.png";

const PressArticles = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();

  const articles = [
    {
      logo: sih,
      date: t("press:pressArticles.date10"),
      article: t("press:pressArticles.article10"),
      url: "https://www.sih-solutions.fr/sih-a-la-une/notil-le-virage-technologique-des-hopitaux-francais/",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: express,
      date: t("press:pressArticles.date7"),
      article: t("press:pressArticles.article7"),
      url: "https://lexpansion.lexpress.fr/actualite-economique/covid-comment-les-outils-numeriques-peuvent-aider-l-hopital-a-gerer-la-crise_2135942.html",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: maddy,
      date: t("press:pressArticles.date6"),
      article: t("press:pressArticles.article6"),
      url: "https://www.maddyness.com/2020/07/27/startups-medtech-sante/",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: hos,
      date: t("press:pressArticles.date4"),
      article: t("press:pressArticles.article4"),
      url: "https://www.hospitalia.fr/L-AP-HP-et-Team-Doc-deploient-l-espace-COVID-REA_a2191.html",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: wudoc,
      date: t("press:pressArticles.date1"),
      article: t("press:pressArticles.article1"),
      url: "https://www.whatsupdoc-lemag.fr/article/covid-rea-un-nouvel-espace-virtuel-dinformations-sur-la-rea-de-lap-hp-pour-les-soignants?fbclid=IwAR0cGnpIrc78Xlir4dFPZ4NgMSlqV-K2QPi-gqD9sGomOujwDxR5V9_KywU",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: ticSante,
      date: t("press:pressArticles.date2"),
      article: t("press:pressArticles.article2"),
      url: "https://www.ticsante.com/story/5148/l-ap-hp-a-lance-l-outil-covid-rea-utilise-par-pres-de-3000-professionnels.html?fbclid=IwAR13pIodo_1UapgcmKMuKcxYKf309ySpQyEl8qzwIIhHCyVvejppe8jePZk",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: ht,
      date: t("press:pressArticles.date5"),
      article: t("press:pressArticles.article5"),
      url: "https://www.healthandtech.eu/fr/tour/news/10741/observatoire-covid-19-communication-securisee-astreinte-24-7-triage.html",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: mfss,
      date: t("press:pressArticles.date8"),
      article: t("press:pressArticles.article8"),
      url: "https://www.myfrenchstartup.com/fr/startup-france/248785/team_doc",
      link: t("press:pressArticles.reading"),
    },
    {
      logo: majors,
      date: t("press:pressArticles.date9"),
      article: t("press:pressArticles.article9"),
      url: "https://www.youtube.com/watch?v=BG6V_hHrK_s&ab_channel=TheMajors",
      link: t("press:pressArticles.view"),
    },
    {
      logo: wudoc,
      date: t("press:pressArticles.date3"),
      article: t("press:pressArticles.article3"),
      url: "https://www.whatsupdoc-lemag.fr/article/bientot-dans-vos-services-teamdoc-le-whatsapp-medical",
      link: t("press:pressArticles.reading"),
    },
  ];

  return (
    <div className="pressArticles">
      <Container>
        <h2 className="pressArticles__title">
          {t("press:pressArticles.title")}
        </h2>
        <p className="pressArticles__text">{t("press:pressArticles.p")}</p>
        <div className="pressArticles__articlesGrid">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PressArticles;
