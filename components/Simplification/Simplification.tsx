import React from "react";
import Container from "../Container/Container";

const Simplification = () => {
  return (
    <section className="simplification">
      <Container>
        <div className="simplification__titleContainer">
          <h2 className="simplification__title">
            Simplifions le quotidien des soignants
          </h2>
          <p className="simplification__paragraph">
            Team’Doc est un outil de travail collaboratif qui permet d’échanger
            des informations sur les patients en toute sécurité. Communiquez en
            temps réel avec votre équipe, créez ou rejoignez un réseau de
            professionnels de santé.
          </p>
        </div>
        <div className="simplification__cardContainer">
          <div className="simplification__card">
            <img
              src="/images/home/caregivers.png"
              alt="soignants"
              width="300px"
              height="300px"
            />
            <div className="simplification__container">
              <h3>Messagerie instantanée sécurisée de santé</h3>
              <p>
                Développé sous forme d’application sécurisée, Team’Doc intègre
                les outils du quotidien : Whatsapp® médical sécurisé et Dropbox®
                de la santé.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Simplification;
