// REACT
import { useContext } from "react";
// TRANSLATION
// import { useTranslation } from "next-i18next";
import { common } from "../../translations/fr/common";
// CONTEXT
import { DrawerContext } from "./../../context/DrawerContext";
// COMPONENTS
import DownloadApp from "./../DownloadApp/DownloadApp";
import Address from "./../Address/Address";
import SocialMedia from "./../SocialMedia/SocialMedia";

const Drawer = () => {
  // REACT HOOKS
  const { open, handleOpen } = useContext(DrawerContext);
  // I18NEXT HOOKS
  // const { t } = useTranslation();

  const drawerBackdropClasses = open
    ? ["drawer__backdrop", "drawer__backdropOpen"]
    : ["drawer__backdrop", "drawer__backdropClose"];

  const drawerContainerClasses = open
    ? ["drawer__container", "drawer__drawerOpen"]
    : ["drawer__container", "drawer__drawerClose"];

  return (
    <div className="drawer">
      <div
        className={drawerBackdropClasses.join(" ")}
        onClick={handleOpen}
      ></div>
      <div className={drawerContainerClasses.join(" ")}>
        <div className="drawer__close" onClick={handleOpen}>
          <img src="/images/icones/close.svg" alt="" />
        </div>
        <div className="drawer__content">
          <DownloadApp />
          <div>
            <h4 className="footer__title">Contact</h4>
            <Address />
          </div>
          <div>
            <h4 className="footer__title">{common.follow}</h4>
            {/* <h4 className="footer__title">{t("common:follow")}</h4> */}
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
