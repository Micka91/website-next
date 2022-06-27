import Navigation from "./../Navigation/Navigation";
import Footer from "./../Footer/Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navigation />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
