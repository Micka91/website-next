/* eslint-disable @next/next/no-img-element */

// TRANSLATION
import { useTranslation } from "next-i18next";
import Image from "next/image";
// COMPONENTS
import Container from "../Container/Container";

const Simplification = () => {
  // I18NEXT HOOKS
  const { t } = useTranslation();

  return (
    <section className="simplification">
      <Container>
        <div className="simplification__titleContainer">
          <h2 className="simplification__title">
            {t("home:simplification.h2")}
          </h2>
          <p className="simplification__paragraph">
            {t("home:simplification.p1")}
          </p>
        </div>
        <div className="simplification__cardContainer">
          <div className="simplification__card">
            <Image
              src="/images/home/caregivers.png"
              alt={t("home:simplification.alt")}
              width="300"
              height="300"
            />
            <div className="simplification__container">
              <h3>{t("home:simplification.h3")}</h3>
              <p>{t("home:simplification.p2")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Simplification;
