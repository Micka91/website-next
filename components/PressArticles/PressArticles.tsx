// TRANSLATION
import { press } from "../../translations/fr/press";
// COMPONENTS
import Article from "./../Article/Article";
import Container from "./../Container/Container";

const express = "/images/press/articles/Express.svg";
const maddy = "/images/press/articles/Maddynesslogo.svg";
const ticSante = "/images/press/articles/logo_tic_sante.jpg";
const wudoc = "/images/press/articles/logo-wudoc.png";
const hos = "/images/press/articles/hospitalia.png";
const ht = "/images/press/articles/650.logo_large.png";
const mfss = "/images/press/articles/mffs.png";
const majors = "/images/press/articles/Majors.jpg";
const sih = "/images/press/articles/sih.png";
const mindHealth = "/images/press/articles/mindHealth.jpg";

const PressArticles = () => {
  const articles = [
    {
      logo: mindHealth,
      date: press.pressArticles.date11,
      article: press.pressArticles.article11,
      url: "https://www.mindhealth.fr/parcours-de-soins/lisni-distingue-3-start-up-du-soin-digital-a-lhotel-dieu/",
      link: press.pressArticles.reading,
    },
    {
      logo: sih,
      date: press.pressArticles.date10,
      article: press.pressArticles.article10,
      url: "https://www.sih-solutions.fr/sih-a-la-une/notil-le-virage-technologique-des-hopitaux-francais/",
      link: press.pressArticles.reading,
    },
    {
      logo: express,
      date: press.pressArticles.date7,
      article: press.pressArticles.article7,
      url: "https://lexpansion.lexpress.fr/actualite-economique/covid-comment-les-outils-numeriques-peuvent-aider-l-hopital-a-gerer-la-crise_2135942.html",
      link: press.pressArticles.reading,
    },
    {
      logo: maddy,
      date: press.pressArticles.date6,
      article: press.pressArticles.article6,
      url: "https://www.maddyness.com/2020/07/27/startups-medtech-sante/",
      link: press.pressArticles.reading,
    },
    {
      logo: hos,
      date: press.pressArticles.date4,
      article: press.pressArticles.article4,
      url: "https://www.hospitalia.fr/L-AP-HP-et-Team-Doc-deploient-l-espace-COVID-REA_a2191.html",
      link: press.pressArticles.reading,
    },
    {
      logo: wudoc,
      date: press.pressArticles.date1,
      article: press.pressArticles.article1,
      url: "https://www.whatsupdoc-lemag.fr/article/covid-rea-un-nouvel-espace-virtuel-dinformations-sur-la-rea-de-lap-hp-pour-les-soignants?fbclid=IwAR0cGnpIrc78Xlir4dFPZ4NgMSlqV-K2QPi-gqD9sGomOujwDxR5V9_KywU",
      link: press.pressArticles.reading,
    },
    {
      logo: ticSante,
      date: press.pressArticles.date2,
      article: press.pressArticles.article2,
      url: "https://www.ticsante.com/story/5148/l-ap-hp-a-lance-l-outil-covid-rea-utilise-par-pres-de-3000-professionnels.html?fbclid=IwAR13pIodo_1UapgcmKMuKcxYKf309ySpQyEl8qzwIIhHCyVvejppe8jePZk",
      link: press.pressArticles.reading,
    },
    {
      logo: ht,
      date: press.pressArticles.date5,
      article: press.pressArticles.article5,
      url: "https://www.healthandtech.eu/fr/tour/news/10741/observatoire-covid-19-communication-securisee-astreinte-24-7-triage.html",
      link: press.pressArticles.reading,
    },
    {
      logo: mfss,
      date: press.pressArticles.date8,
      article: press.pressArticles.article8,
      url: "https://www.myfrenchstartup.com/fr/startup-france/248785/team_doc",
      link: press.pressArticles.reading,
    },
    {
      logo: majors,
      date: press.pressArticles.date9,
      article: press.pressArticles.article9,
      url: "https://www.youtube.com/watch?v=BG6V_hHrK_s&ab_channel=TheMajors",
      link: press.pressArticles.view,
    },
    {
      logo: wudoc,
      date: press.pressArticles.date3,
      article: press.pressArticles.article3,
      url: "https://www.whatsupdoc-lemag.fr/article/bientot-dans-vos-services-teamdoc-le-whatsapp-medical",
      link: press.pressArticles.reading,
    },
  ];

  return (
    <div className="pressArticles">
      <Container>
        <h2 className="pressArticles__title">{press.pressArticles.title}</h2>
        <p className="pressArticles__text">{press.pressArticles.p}</p>
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
