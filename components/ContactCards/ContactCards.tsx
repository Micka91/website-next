// NEXT
import Image from "next/image";
// TRANSLATION
import { contact } from "../../translations/fr/contact";

const ContactCards = () => {
  const cards = [
    {
      title: contact.card1.title,
      // title: t("contact:card1.title"),
      src: "/images/contact/press.png",
      mail: "presse@teamdoc.fr",
    },
    {
      title: contact.card2.title,
      // title: t("contact:card2.title"),
      src: "/images/contact/commercial.png",
      mail: "commercial@teamdoc.fr",
    },
    {
      title: contact.card3.title,
      // title: t("contact:card3.title"),
      src: "/images/contact/technical.png",
      mail: "support@teamdoc.fr",
    },
  ];

  return (
    <div className="contactCards">
      {cards.map((card) => (
        <div key={card.title} className="contactCards__card">
          <h2 className="contactCards__title">{card.title}</h2>
          <Image
            src={card.src}
            alt=""
            className="contactCards__image"
            width="270"
            height="270"
          />
          <div className="contactCards__linkContainer">
            <Image
              src="/images/contact/mail.svg"
              alt=""
              className="contactCards__image"
              width="20"
              height="20"
            />
            <a href={`mailto:${card.mail}`} className="contactCards__link">
              {card.mail}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
