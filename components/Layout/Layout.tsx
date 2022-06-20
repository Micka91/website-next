import Navigation from "./../Navigation/Navigation";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* FOOTER */}
    </>
  );
};

export default Layout;
