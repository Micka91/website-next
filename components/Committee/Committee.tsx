// TRANSLATION
import { teams } from "../../translations/fr/teams";
// COMPONENTS
import CommittyContainer from "./CommittyContainer/CommittyContainer";
import CommittyCard from "./CommittyCard/CommittyCard";
import Image from "next/image";

const Committee = () => {
  return (
    <div className="commitee">
      <div className="commitee__background">
        <Image
          src="/images/solutions/bluewave.png"
          alt="fond bleu"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="commitee__title">
        <h2>{teams.comity.title}</h2>
      </div>
      <div className="commitee__grid">
        <div>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.reanimation}
              name="Dr. Tristan Thibault-Sogorb"
              places={teams.comity.locationReaDoctor}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.dermatology}
              name="Dr. Charlotte Bernigaud"
              places={teams.comity.locationDermatoDoctor}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.endocrino}
              name="Dr. Marie Vallée"
              places={teams.comity.locationExercice}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.gastroEntero}
              name="Dr. François Villeret"
              places={teams.comity.locationGastroDoctor}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.geriatry}
              name="Dr. Cyprien Arlaud"
              places={teams.comity.geriatryLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.gynecology}
              name="Dr. Marie Vinchant"
              places={teams.comity.gynecologyLocation}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.oncology}
              name="Dr. Sophie Hans"
              places={teams.comity.oncologyStatus}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.pediatry}
              name="Dr. Sophie Blais"
              places={teams.comity.pediatryLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.psychiatry}
              name="Dr. Astrid Chevance"
              places={teams.comity.psychiatryLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.pneumology}
              name="Dr. Etienne-Marie Jutant"
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.emergencies}
              name="Dr. Pierre-Clément Thiebaud"
              places={teams.comity.emergenciesLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.urology}
              name="Dr. Maxime Vallée"
              places={teams.comity.urologyLocation}
            />
          </CommittyContainer>
        </div>
        <div>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.cardiology}
              name="Dr. Oliver Auzel"
              places={teams.comity.cardiologyLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.orthopedySurgery}
              name="Dr. Thomas Stevignon"
              places={teams.comity.orthopedySurgeryLocationBis}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.hematology}
              name="Dr. Justine Decroocq"
              places={teams.comity.hematologyLocation}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.infectiology}
              name="Dr. Aurélien Dinh"
              places={teams.comity.infectiologyLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.nurse}
              name="Clotilde Dollard"
              places={teams.comity.nurseLocation}
            />
            <div className="commitee__dashedHr"></div>
            <CommittyCard
              name="Anne-Sophie Debue"
              places={teams.comity.secondNurseLocation}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.internalMedicine}
              name="Dr. Benjamin Chaigne"
              places={teams.comity.internalMedicineLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.physicalMedicine}
              name="Dr. Jonathan Levy"
              places={teams.comity.physicalMedicineLocation}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.nephrology}
              name="Dr. Côme Bureau"
              places={teams.comity.nephrologyLocation}
            />
            <div className="commitee__blueHr"></div>
            <CommittyCard
              title={teams.comity.neurology}
              name="Dr. Estelle Pruvost"
              places={teams.comity.neurologyLocation}
            />
          </CommittyContainer>
          <CommittyContainer>
            <CommittyCard
              title={teams.comity.radiology}
              name="Dr. Laetitia Perronne"
              places={teams.comity.radiologyStatus}
            />
          </CommittyContainer>
        </div>
      </div>
    </div>
  );
};

export default Committee;
