import React from "react";
import AppStore from "./../AppStore/AppStore";
import GooglePlay from "./../GooglePlay/GooglePlay";

const DownloadApp = () => {
  return (
    <div className="footer__container">
      <h4 className="footer__title">Téléchargements</h4>
      <p className="footer__paragraph">
        L’application Team’Doc est disponible gratuitement, sur les stores !
      </p>
      <div className="footer__buttons">
        <AppStore />
        <GooglePlay />
      </div>
    </div>
  );
};

export default DownloadApp;
