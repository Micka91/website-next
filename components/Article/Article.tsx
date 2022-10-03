import Image from "next/image";

interface IProps {
  article: {
    logo: string;
    date: string;
    article: string;
    url: string;
    link: string;
  };
}

const Article = ({ article }: IProps) => {
  const { logo, date, article: text, url, link } = article;

  return (
    <article className="article">
      <div>
        <div className="article__logo">
          <Image
            src={logo}
            alt={text}
            width="130"
            height="52"
            loading="eager"
          />
        </div>
        <p className="article__date">
          <time dateTime={date}>{date}</time>
        </p>
        <p className="article__resume">{text}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="article__link"
      >
        {link}
      </a>
    </article>
  );
};

export default Article;
