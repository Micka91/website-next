import React from "react";

const socialsMedias = [
  {
    img: "/images/social/fb.svg",
    alt: "Logo facebook",
    href: "https://www.facebook.com/TeamDocMD/?ref=aymt_homepage_panel&eid=ARCCAB20M-zh5aR3-beb4H7D5pJRaxHlVyl4fTu7Cwa36L8fj8n3QdJCGlLGiK2iWscBkQjfnWoyvAwJ",
  },
  {
    img: "/images/social/twitter.svg",
    alt: "Logo twitter",
    href: "https://twitter.com/Team__Doc",
  },
  {
    img: "/images/social/linkedin.svg",
    alt: "Logo linkedin",
    href: "https://www.linkedin.com/company/11110664/admin/",
  },
];

const SocialMedia = () => {
  return (
    <ul className="socialMedia">
      {socialsMedias.map((socialsMedia, index) => (
        <li key={index} className="socialMedia__item">
          <a
            href={socialsMedia.href}
            target="_blank"
            rel="noopener noreferrer"
            className="socialMedia__link"
          >
            <img
              src={socialsMedia.img}
              alt={socialsMedia.alt}
              className="socialMedia__image"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
