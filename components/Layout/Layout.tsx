// REACT
import { useContext } from "react";
// COMPONENTS
import Navigation from "./../Navigation/Navigation";
import Footer from "./../Footer/Footer";
import Drawer from "./../Drawer/Drawer";
// CONTEXT
import { DrawerContext } from "./../../context/DrawerContext";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  // REACT HOOKS
  const { open } = useContext(DrawerContext);

  return (
    <>
      <Navigation />
      <main className="layout">{children}</main>
      <Footer />
      {/* {open &&  */}
      <Drawer />
      {/* } */}
    </>
  );
};

export default Layout;
