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
        <img src="/images/icones/arrowTop.svg" alt="arrow" />
      </div>
    </section>
  );
};

export default ScrollTopButton;
