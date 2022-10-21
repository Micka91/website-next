// REACT
import { useState, useEffect } from "react";
// NEXT
import Image from "next/image";
// TRANSLATION
// import { useTranslation } from "next-i18next";

interface IProps {
  href: string;
  title: string;
  src: string;
  alt: string;
}

const AppButton = ({ href, title, src, alt }: IProps) => {
  // // I18NEXT HOOKS
  // const { t } = useTranslation();
  // REACT STATE
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      <Image
        src={src}
        alt={alt}
        width={matches ? 140 : 240}
        height={matches ? 44 : 75}
        loading="eager"
      />
    </a>
  );
};

export default AppButton;
