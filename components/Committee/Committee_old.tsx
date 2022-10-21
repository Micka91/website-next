// TRANSLATION
import { useTranslation } from "next-i18next";
// COMPONENTS
import CommittyContainer from "./CommittyContainer/CommittyContainer";
import CommittyCard from "./CommittyCard/CommittyCard";

const Committee = () => {
  // i18NEXT HOOK
  const { t } = useTranslation();
  return (
    <div className="commitee">
      <div className="commitee__title">
        <h2>{t("teams:comity.title")}</h2>
      </div>
      <div className="commitee__grid">
        <div>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.reanimation")}
              name="Dr. Tristan Thibault-Sogorb"
              places={t("teams:comity.locationReaDoctor")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.dermatology")}
              name="Dr. Charlotte Bernigaud"
              places={t("teams:comity.locationDermatoDoctor")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.endocrino")}
              name="Dr. Marie Vallée"
              places={t("teams:comity.locationExercice")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.gastroEntero")}
              name="Dr. François Villeret"
              places={t("teams:comity.locationGastroDoctor")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.geriatry")}
              name="Dr. Cyprien Arlaud"
              places={t("teams:comity.geriatryLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.gynecology")}
              name="Dr. Marie Vinchant"
              places={t("teams:comity.gynecologyLocation")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.oncology")}
              name="Dr. Sophie Hans"
              places={t("teams:comity.oncologyStatus")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.pediatry")}
              name="Dr. Sophie Blais"
              places={t("teams:comity.pediatryLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.psychiatry")}
              name="Dr. Astrid Chevance"
              places={t("teams:comity.psychiatryLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.pneumology")}
              name="Dr. Etienne-Marie Jutant"
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.emergencies")}
              name="Dr. Pierre-Clément Thiebaud"
              places={t("teams:comity.emergenciesLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.urology")}
              name="Dr. Maxime Vallée"
              places={t("teams:comity.urologyLocation")}
            />
          </CommittyContainer>
        </div>
        <div>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.cardiology")}
              name="Dr. Oliver Auzel"
              places={t("teams:comity.cardiologyLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.orthopedySurgery")}
              name="Dr. Thomas Stevignon"
              places={t("teams:comity.orthopedySurgeryLocationBis")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.hematology")}
              name="Dr. Justine Decroocq"
              places={t("teams:comity.hematologyLocation")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.infectiology")}
              name="Dr. Aurélien Dinh"
              places={t("teams:comity.infectiologyLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.nurse")}
              name="Clotilde Dollard"
              places={t("teams:comity.nurseLocation")}
            />
            <div className="commitee__dashedHr"></div>
            <CommittyCard
              name="Anne-Sophie Debue"
              places={t("teams:comity.secondNurseLocation")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.internalMedicine")}
              name="Dr. Benjamin Chaigne"
              places={t("teams:comity.internalMedicineLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.physicalMedicine")}
              name="Dr. Jonathan Levy"
              places={t("teams:comity.physicalMedicineLocation")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.nephrology")}
              name="Dr. Côme Bureau"
              places={t("teams:comity.nephrologyLocation")}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={t("teams:comity.neurology")}
              name="Dr. Estelle Pruvost"
              places={t("teams:comity.neurologyLocation")}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={t("teams:comity.radiology")}
              name="Dr. Laetitia Perronne"
              places={t("teams:comity.radiologyStatus")}
            />
          </CommittyContainer>
        </div>
      </div>
    </div>
  );
};

export default Committee;
