// TRANSLATION
// import { useTranslation } from "next-i18next";
import { offers } from "../../translations/fr/offers";
// UTILS
import { wkType } from "./../OffersCards/OffersCards";
// COMPONENTS
import Container from "./../Container/Container";
import OfferCard from "./../OfferCard/OfferCard";

interface IProps {
  type: string;
}

const ROADMAP = "/images/offers/ROADMAP.jpg";
const r1 = "/images/offers/roadmap-1.jpg";
const r2 = "/images/offers/roadmap-2.jpg";
const r3 = "/images/offers/roadmap-3.jpg";
const r4 = "/images/offers/roadmap-4.jpg";
const r5 = "/images/offers/roadmap-5.jpg";

const doctor = "/images/offers/doctor.png";
const team = "/images/offers/team.png";
const files = "/images/offers/files.png";
const multiFiles = "/images/offers/multiFiles.png";
const teams = "/images/offers/teams.png";

const OffersOptions = ({ type }: IProps) => {
  // i18NEXT HOOK
  // const { t } = useTranslation();

  const offersCards = [
    {
      id: "access 1",
      titleCard: offers.cards.title,
      offers: offers.cards._free,
      image: doctor,
      pricePerMonth: 0,
      unity: "€",
      perMonth: offers.cards.perMonth,
      options: [
        offers.cards.options.optionsOne,
        offers.cards.options.optionsTwo,
        offers.cards.options.optionsFreeOne,
        offers.cards.options.optionsFreeTwo,
        offers.cards._storage["100MO"],
      ],
      downloadNow: offers.cards.downloadNow,
    },
    {
      id: "access 2",
      titleCard: offers.cards.title,
      offers: offers.cards.standard,
      image: teams,
      image2: files,
      pricePerMonth: 11,
      unity: "€",
      cents: 99,
      perMonth: offers.cards.perMonth,
      or: offers.cards.or,
      pricePerYear: "119€99",
      perYear: offers.cards.perYear,
      options: [
        offers.cards.options.optionsOne,
        offers.cards.options.optionsTwo,
        offers.cards.options.optionsThree,
        offers.cards.options.optionsFour,
        offers.cards.options.optionsFive,
        offers.cards._storage["5GO"],
      ],
      downloadNow: offers.cards.downloadNow,
    },
    {
      id: "access 3",
      titleCard: offers.cards.title,
      offers: offers.cards.advantage,
      image: teams,
      image2: multiFiles,
      pricePerMonth: 16,
      unity: "€",
      cents: 99,
      perMonth: offers.cards.perMonth,
      or: offers.cards.or,
      pricePerYear: "169€99",
      perYear: offers.cards.perYear,
      options: [
        offers.cards.options.optionsOne,
        offers.cards.options.optionsTwo,
        offers.cards.options.optionsThree,
        offers.cards.options.optionsFour,
        offers.cards.options.optionsFive,
        offers.cards._storage["50GO"],
      ],
      downloadNow: offers.cards.downloadNow,
    },
  ];

  // const offers = [
  //   {
  //     id: "access 1",
  //     titleCard: t("offers:cards.title"),
  //     offers: t("offers:cards._free"),
  //     image: doctor,
  //     pricePerMonth: 0,
  //     unity: "€",
  //     perMonth: t("offers:cards.perMonth"),
  //     options: [
  //       t("offers:cards.options.optionsOne"),
  //       t("offers:cards.options.optionsTwo"),
  //       t("offers:cards.options.optionsFreeOne"),
  //       t("offers:cards.options.optionsFreeTwo"),
  //       t("offers:cards._storage.100MO"),
  //     ],
  //     downloadNow: t("offers:cards.downloadNow"),
  //   },
  //   {
  //     id: "access 2",
  //     titleCard: t("offers:cards.title"),
  //     offers: t("offers:cards.standard"),
  //     image: teams,
  //     image2: files,
  //     pricePerMonth: 11,
  //     unity: "€",
  //     cents: 99,
  //     perMonth: t("offers:cards.perMonth"),
  //     or: t("offers:cards.or"),
  //     pricePerYear: "119€99",
  //     perYear: t("offers:cards.perYear"),
  //     options: [
  //       t("offers:cards.options.optionsOne"),
  //       t("offers:cards.options.optionsTwo"),
  //       t("offers:cards.options.optionsThree"),
  //       t("offers:cards.options.optionsFour"),
  //       t("offers:cards.options.optionsFive"),
  //       t("offers:cards._storage.5GO"),
  //     ],
  //     downloadNow: t("offers:cards.downloadNow"),
  //   },
  //   {
  //     id: "access 3",
  //     titleCard: t("offers:cards.title"),
  //     offers: t("offers:cards.advantage"),
  //     image: teams,
  //     image2: multiFiles,
  //     pricePerMonth: 16,
  //     unity: "€",
  //     cents: 99,
  //     perMonth: t("offers:cards.perMonth"),
  //     or: t("offers:cards.or"),
  //     pricePerYear: "169€99",
  //     perYear: t("offers:cards.perYear"),
  //     options: [
  //       t("offers:cards.options.optionsOne"),
  //       t("offers:cards.options.optionsTwo"),
  //       t("offers:cards.options.optionsThree"),
  //       t("offers:cards.options.optionsFour"),
  //       t("offers:cards.options.optionsFive"),
  //       t("offers:cards._storage.50GO"),
  //     ],
  //     downloadNow: t("offers:cards.downloadNow"),
  //   },
  // ];

  return (
    <Container>
      {type === wkType.PRO ? (
        <section>
          <div className="offersOptions__cards">
            {offersCards.map((offer, index) => (
              <OfferCard key={offer.id} offer={offer} row={index} />
            ))}
          </div>
          {/* <div >
                <p>
                  <span>* </span>
                  {t("offers.limitedAccess")}
                </p>
              </div> */}
        </section>
      ) : (
        <>
          <div className="offersOptions__roadmap">
            <img src={ROADMAP} alt="" />
          </div>
          <div className="offersOptions__roadmapMobile">
            <img src={r1} alt="" />
            <img src={r2} alt="" />
            <img src={r3} alt="" />
            <img src={r4} alt="" />
            <img src={r5} alt="" />
          </div>
        </>
      )}
    </Container>
  );
};

export default OffersOptions;
