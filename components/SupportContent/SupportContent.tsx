// REACT
import { useState, useEffect, useMemo } from "react";
// COMPONENTS
import SupportPdfCard from "./../SupportPdfCard/SupportPdfCard";
// TRANSLATION
import { support } from "../../translations/fr/support";

export interface ISupport {
  link: string;
  title: string;
}

const SupportContent = () => {
  // REACT STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<ISupport[]>([]);

  // ARRAY OF PDF
  const supportPdf: ISupport[] = useMemo(
    () => [
      {
        link: "/images/pdf/Ajouter_un_contact_du_réseau_TD.pdf",
        title: support.pdf.addContact,
      },
      {
        link: "/images/pdf/Ajouter_un_média_à_une_fiche_patient.pdf",
        title: support.pdf.addMediaPatient,
      },
      {
        link: "/images/pdf/Ajouter_un_média.pdf",
        title: support.pdf.addMedia,
      },
      {
        link: "/images/pdf/Changer_son_statut_de_garde.pdf",
        title: support.pdf.changeStatut,
      },
      {
        link: "/images/pdf/Changer_son_statut_de_disponibilité.pdf",
        title: support.pdf.changeDisponibility,
      },
      {
        link: "/images/pdf/Compléter_une_fiche_patient.pdf",
        title: support.pdf.completePatient,
      },
      {
        link: "/images/pdf/Consulter_les_recommandations.pdf",
        title: support.pdf.watchRecos,
      },
      {
        link: "/images/pdf/Créer_son_compte_Team'Doc.pdf",
        title: support.pdf.createAccount,
      },
      {
        link: "/images/pdf/Créer_un_groupe.pdf",
        title: support.pdf.createGroup,
      },
      {
        link: "/images/pdf/Créer_une_discussion.pdf",
        title: support.pdf.createDiscussion,
      },
      {
        link: "/images/pdf/Créer_une_discussion_via_une_fiche_patient.pdf",
        title: support.pdf.createDiscussionPatient,
      },
      {
        link: "/images/pdf/Créer_une_fiche_patient.pdf",
        title: support.pdf.createPatient,
      },
      {
        link: "/images/pdf/Créer_une_tâche.pdf",
        title: support.pdf.createTask,
      },
      {
        link: "/images/pdf/Créer_une_tâche_via_une_fiche_patient.pdf",
        title: support.pdf.createTaskPatient,
      },
      {
        link: "/images/pdf/Inviter_un_contact_depuis_mon_répertoire_(n'utilise pas TD).pdf",
        title: support.pdf.inviteUserRepertoryUnuse,
      },
      {
        link: "/images/pdf/Inviter_un_contact_depuis_mon_répertoire_(utilise TD).pdf",
        title: support.pdf.inviteUserRepertoryUse,
      },
      {
        link: "/images/pdf/Inviter_un_nouveau_contact.pdf",
        title: support.pdf.inviteContact,
      },
      {
        link: "/images/pdf/Partager_un_média_avec_votre_équipe.pdf",
        title: support.pdf.shareMediaTeam,
      },
      {
        link: "/images/pdf/Permuter_un_patient_dans_un_lit_vide.pdf",
        title: support.pdf.switchPatientEmptyBed,
      },
      {
        link: "/images/pdf/Permuter_un_patient_de_lit.pdf",
        title: support.pdf.switchPatient,
      },
      {
        link: "/images/pdf/Première_connexion.pdf",
        title: support.pdf.firstLogin,
      },
      {
        link: "/images/pdf/Rejoindre_une_équipe.pdf",
        title: support.pdf.joinTeam,
      },
      {
        link: "/images/pdf/Se_connecter_et_se_déconnecter.pdf",
        title: support.pdf.loginLogout,
      },
      {
        link: "/images/pdf/Valider_son_profil_professionnel.pdf",
        title: support.pdf.validateProfil,
      },
    ],
    []
  );

  // Event Handler on input search change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // TRIGGER WHEN SEARCHTERM CHANGE, REASSIGN ARRAY OF PDF
  useEffect(() => {
    const results: ISupport[] = supportPdf.filter((s) =>
      s.title.toString().toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, supportPdf]);

  return (
    <>
      <section className="support">
        <div className="support__searchContainer">
          <div className="support__inputContainer">
            <input
              type="text"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={handleChange}
              className="support__input"
            />
          </div>
        </div>
      </section>
      <section className="support__pdfContainer">
        {/* Loop on array */}
        {searchResults.map((pdf, index) => (
          <SupportPdfCard key={index} pdf={pdf} />
        ))}
      </section>
    </>
  );
};

export default SupportContent;
