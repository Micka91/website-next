// REACT
import { useState, useEffect } from "react";
// COMPONENTS
import Navigation from "./../Navigation/Navigation";
import Footer from "./../Footer/Footer";
import Drawer from "./../Drawer/Drawer";
import DrawerNavigation from "./../DrawerNavigation/DrawerNavigation";
import ScrollTopButton from "./../ScrollTopButton/ScrollTopButton";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const [showBtn, setShowBtn] = useState(false);
  const popUpBtn = () => {
    let y = window.scrollY;
    if (y >= 400) {
      setShowBtn(true);
    } else if (y < 400) {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", popUpBtn);

    return () => {
      window.removeEventListener("scroll", popUpBtn);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="layout">{children}</main>
      <Footer />
      <DrawerNavigation />
      <Drawer />
      <ScrollTopButton showBtn={showBtn} />
    </>
  );
};

export default Layout;
