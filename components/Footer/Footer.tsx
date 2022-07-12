import Container from "../Container/Container";
import Informations from "./../Informations/Informations";
import Conditions from "./../Conditions/Conditions";
import DownloadApp from "../DownloadApp/DownloadApp";
import Copyright from "./../Copyright/Copyright";
import Details from "./../Details/Details";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer">
          <Details />
          <Informations />
          <Conditions />
          <DownloadApp />
        </div>
      </Container>
      <Copyright />
    </footer>
  );
};

export default Footer;
