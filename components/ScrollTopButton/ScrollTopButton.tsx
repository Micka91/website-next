// NEXT
import Image from "next/image";

interface IProps {
  showBtn?: boolean;
}

const ScrollTopButton = ({ showBtn }: IProps) => {
  const containerClasse = showBtn
    ? ["scrollButton__container", "scrollButton__show"]
    : ["scrollButton__container", "scrollButton__hide"];

  const buttonClasse = showBtn
    ? ["scrollButton__button", "scrollButton__show"]
    : ["scrollButton__button", "scrollButton__hide"];

  const triggerScrollTop = () => {
    window.scrollTo(window.scrollY, 0);
  };

  return (
    <section className={containerClasse.join(" ")}>
      <div className={buttonClasse.join(" ")} onClick={triggerScrollTop}>
        <Image
          src="/images/icones/arrowTop.svg"
          alt="arrow"
          width="30"
          height="30"
        />
      </div>
    </section>
  );
};

export default ScrollTopButton;
